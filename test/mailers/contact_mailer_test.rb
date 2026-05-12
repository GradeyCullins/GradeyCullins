require "test_helper"

class ContactMailerTest < ActionMailer::TestCase
  test "contact email includes structured service request fields" do
    email = ContactMailer.with(
      name: "Gradey",
      email: "gradey@example.com",
      company: "Acme",
      project_type: "AI product build",
      budget: "$15k-$50k",
      timeline: "1-3 months",
      message: "Let's build something useful."
    ).contact_email

    assert_equal [ "gradeycullins@gmail.com" ], email.to
    assert_equal "contact@gradeycullins.com", email.from.first
    assert_includes email.subject, "Gradey"
    assert_includes email.subject, "gradey@example.com"
    assert_includes email.body.to_s, "Name: Gradey"
    assert_includes email.body.to_s, "Email: gradey@example.com"
    assert_includes email.body.to_s, "Company: Acme"
    assert_includes email.body.to_s, "Project type: AI product build"
    assert_includes email.body.to_s, "Budget: $15k-$50k"
    assert_includes email.body.to_s, "Timeline: 1-3 months"
    assert_includes email.body.to_s, "Message:\nLet's build something useful."
  end
end
