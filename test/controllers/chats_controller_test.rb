require "test_helper"
require "minitest/mock"

class ChatsControllerTest < ActionDispatch::IntegrationTest
  test "message returns 429 when IP exceeds message limit" do
    # Test requests come from 127.0.0.1
    chat = Chat.create!(
      model: LlmConfig::OPENAI_MODEL,
      provider: :openai,
      ip_address: "127.0.0.1"
    )

    # Seed 20 user messages directly in the DB to hit the limit
    20.times do
      Message.create!(chat_id: chat.id, role: "user", content: "hello")
    end

    post "/api/chats/#{chat.id}/messages",
         params: { content: "one more", agent: "website" },
         as: :json

    assert_response :too_many_requests
    body = JSON.parse(response.body)
    assert_equal "rate_limited", body["error"]
    assert_includes body["content"], "limit"
  end

  test "message is allowed when under the limit" do
    chat = Chat.create!(
      model: LlmConfig::OPENAI_MODEL,
      provider: :openai,
      ip_address: "127.0.0.1"
    )
    llm_response = Struct.new(:content).new("ok")
    agent = Minitest::Mock.new
    agent.expect(:ask, llm_response, [ "still ok" ])

    # Seed 19 user messages — one under the limit
    19.times do
      Message.create!(chat_id: chat.id, role: "user", content: "hello")
    end

    # This should NOT be rate limited (the 20th message is allowed through to the agent).
    WebsiteAgent.stub(:new, agent) do
      post "/api/chats/#{chat.id}/messages",
           params: { content: "still ok", agent: "website" },
           as: :json
    end

    assert_not_equal 429, response.status
    agent.verify
  end
end
