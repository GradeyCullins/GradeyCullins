class ChatsController < ApplicationController
  skip_before_action :verify_authenticity_token, only: [ :create, :message ]

  AGENTS = {
    "website" => WebsiteAgent,
    "resume" => ResumeAgent
  }.freeze

  def create
    agent_class = AGENTS[params[:agent]]
    return render json: { error: "Unknown agent" }, status: :unprocessable_entity unless agent_class

    chat = Chat.create!(model_id: "claude-sonnet-4-20250514")
    agent = agent_class.new(chat: chat.to_llm)

    render json: { chat_id: chat.id }
  end

  def message
    chat = Chat.find(params[:chat_id])
    agent_key = params[:agent] || "website"
    agent_class = AGENTS[agent_key]
    return render json: { error: "Unknown agent" }, status: :unprocessable_entity unless agent_class

    user_content = params[:content]
    return render json: { error: "Content is required" }, status: :unprocessable_entity if user_content.blank?

    agent = agent_class.new(chat: chat.to_llm)
    response = agent.ask(user_content)

    render json: {
      content: response.content,
      role: "assistant"
    }
  end
end
