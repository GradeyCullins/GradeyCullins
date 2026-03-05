class WebsiteAgent < RubyLLM::Agent
  model "claude-sonnet-4-20250514"
  instructions
  temperature 0.4
end
