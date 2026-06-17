class ResumeAgent < RubyLLM::Agent
  model LlmConfig::OPENAI_MODEL, provider: :openai, assume_model_exists: true
  instructions
end
