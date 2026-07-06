module LlmConfig
  OPENAI_MODEL = "gpt-5.4-mini"
end

RubyLLM.configure do |config|
  config.openai_api_key = ENV["OPENAI_API_KEY"] ||
                           Rails.application.credentials.dig(:openai_api_key) ||
                           Rails.application.credentials.dig(:OPENAI_API_KEY)
  config.default_model = LlmConfig::OPENAI_MODEL
  # config.model_registry_file = Rails.root.join("config/ruby_llm_models.json")
end
