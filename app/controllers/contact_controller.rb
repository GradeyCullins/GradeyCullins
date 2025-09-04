class ContactController < ApplicationController
  def index
    render inertia: 'ContactPage'
  end

  def message
    ContactMailer.with(name: params[:name], email: params[:email], message: params[:message]).contact_email.deliver_now!

    redirect_to contact_url
  end

  private

  def contact_params
    params.require([:name, :email, :message])
  end
end
