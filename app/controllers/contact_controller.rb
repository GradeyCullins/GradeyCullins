class ContactController < ApplicationController
  def index
    render_contact_page
  end

  def message
    permitted_params = contact_params
    SiteVisit.record_contact_email!(request.remote_ip)
    ContactMailer.with(**permitted_params.to_h.symbolize_keys).contact_email.deliver_now!

    redirect_to contact_url, notice: "Thanks - your message has been sent."
  rescue SiteVisit::ContactEmailLimitReached
    render_contact_page(
      error_message: "This IP address has reached the 5 message limit.",
      initial_name: params[:name],
      initial_email: params[:email],
      initial_company: params[:company],
      initial_project_type: params[:project_type],
      initial_budget: params[:budget],
      initial_timeline: params[:timeline],
      initial_message: params[:message],
      status: :too_many_requests
    )
  end

  private

  def render_contact_page(error_message: nil, initial_name: nil, initial_email: nil, initial_company: nil, initial_project_type: nil, initial_budget: nil, initial_timeline: nil, initial_message: nil, status: :ok)
    render inertia: "ContactPage", props: {
      lets_build: params[:lets_build],
      success_message: flash[:notice],
      error_message: error_message,
      initial_name: initial_name,
      initial_email: initial_email,
      initial_company: initial_company,
      initial_project_type: initial_project_type,
      initial_budget: initial_budget,
      initial_timeline: initial_timeline,
      initial_message: initial_message
    }, status: status
  end

  def contact_params
    params.require([ :name, :email, :project_type, :message ])
    params.permit(:name, :email, :company, :project_type, :budget, :timeline, :message)
  end
end
