require "test_helper"

class WebsiteAgentTest < ActiveSupport::TestCase
  test "uses prompt file instructions" do
    assert_equal({ prompt: "instructions", locals: {} }, WebsiteAgent.instructions)
  end

  test "website prompt includes conversion guidance and guardrails" do
    prompt = WebsiteAgent.render_prompt(
      "instructions",
      chat: nil,
      inputs: {},
      locals: {}
    )

    assert_includes prompt, "B2B SaaS"
    assert_includes prompt, "LLM integrations"
    assert_includes prompt, "/contact"
    assert_includes prompt, "/contact?lets_build=PROJECT_SUMMARY"
    assert_includes prompt, "URL-encoded"
    assert_includes prompt, "pre-fill the message field"
    assert_includes prompt, "do not invent specifics"
    assert_includes prompt, "2-4 sentences"
  end
end
