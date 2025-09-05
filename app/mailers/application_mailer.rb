class ApplicationMailer < ActionMailer::Base
  default from: ENV.fetch("DEFAULT_EMAIL_FROM", "noreply@gradeycullins.com")
  layout "mailer"
end
