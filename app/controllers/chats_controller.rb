class ChatsController < ApplicationController
  skip_before_action :verify_authenticity_token, only: [ :create, :message ]

  AGENTS = {
    "website" => WebsiteAgent,
    "resume" => ResumeAgent
  }.freeze

  MESSAGE_LIMIT_PER_IP = 20

  def create
    agent_class = AGENTS[params[:agent]]
    return render json: { error: "Unknown agent" }, status: :unprocessable_entity unless agent_class

    chat = Chat.create!(model_id: "claude-sonnet-4-20250514", ip_address: request.remote_ip)
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

    if rate_limited?
      return render json: {
        error: "rate_limited",
        content: "You've reached the #{MESSAGE_LIMIT_PER_IP}-message limit. Thanks for chatting!"
      }, status: :too_many_requests
    end

    agent = agent_class.new(chat: chat.to_llm)
    response = agent.ask(user_content)

    render json: {
      content: response.content,
      role: "assistant"
    }
  end

  private

  def rate_limited?
    ip = request.remote_ip
    user_message_count = Message.joins("INNER JOIN chats ON chats.id = messages.chat_id")
                                .where(chats: { ip_address: ip })
                                .where(role: "user")
                                .count
    user_message_count >= MESSAGE_LIMIT_PER_IP
  end
end
