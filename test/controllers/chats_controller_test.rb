require "test_helper"

class ChatsControllerTest < ActionDispatch::IntegrationTest
  test "message returns 429 when IP exceeds message limit" do
    # Test requests come from 127.0.0.1
    chat = Chat.create!(model_id: "claude-sonnet-4-20250514", ip_address: "127.0.0.1")

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
    chat = Chat.create!(model_id: "claude-sonnet-4-20250514", ip_address: "127.0.0.1")

    # Seed 19 user messages — one under the limit
    19.times do
      Message.create!(chat_id: chat.id, role: "user", content: "hello")
    end

    # This should NOT be rate limited (the 20th message is allowed through to the agent).
    # We can't easily test the full agent response without mocking the LLM,
    # so we just verify it doesn't return 429.
    post "/api/chats/#{chat.id}/messages",
         params: { content: "still ok", agent: "website" },
         as: :json

    assert_not_equal 429, response.status
  end
end
