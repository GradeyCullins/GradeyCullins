class ContactMailer < ApplicationMailer
  default from: "contact@gradeycullins.com"

  def contact_email
    mail(
      to: "gradeycullins@gmail.com",
      subject: "New Message From GradeyCullins.com - from #{params[:name]} - #{params[:email]}",
      body: params[:message]
    )
  end

  def contact_params
    params.permit %w[name email message]
  end
end
