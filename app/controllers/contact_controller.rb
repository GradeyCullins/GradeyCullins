class ContactController < ApplicationController
  def index
    render_contact_page
  end

  def message
    contact_params
    SiteVisit.record_contact_email!(request.remote_ip)
    ContactMailer.with(name: params[:name], email: params[:email], message: params[:message]).contact_email.deliver_now!

    redirect_to contact_url, notice: "Thanks - your message has been sent."
  rescue SiteVisit::ContactEmailLimitReached
    render_contact_page(
      error_message: "This IP address has reached the 5 message limit.",
      initial_name: params[:name],
      initial_email: params[:email],
      initial_message: params[:message],
      status: :too_many_requests
    )
  end

  private

  def render_contact_page(error_message: nil, initial_name: nil, initial_email: nil, initial_message: nil, status: :ok)
    render inertia: "ContactPage", props: {
      lets_build: params[:lets_build],
      success_message: flash[:notice],
      error_message: error_message,
      initial_name: initial_name,
      initial_email: initial_email,
      initial_message: initial_message
    }, status: status
  end

  def contact_params
    params.require([ :name, :email, :message ])
  end
end
