class ContactMailer < ApplicationMailer
  default from: "contact@gradeycullins.com"

  def contact_email
    mail(
      to: "gradeycullins@gmail.com",
      subject: "New Message From GradeyCullins.com - from #{params[:name]} - #{params[:email]}",
      body: email_body
    )
  end

  def contact_params
    params.permit %w[name email company project_type budget timeline message]
  end

  private

  def email_body
    [
      "Name: #{params[:name]}",
      "Email: #{params[:email]}",
      "Company: #{params[:company].presence || 'Not provided'}",
      "Project type: #{params[:project_type]}",
      "Budget: #{params[:budget].presence || 'Not provided'}",
      "Timeline: #{params[:timeline].presence || 'Not provided'}",
      "",
      "Message:",
      params[:message]
    ].join("\n")
  end
end
