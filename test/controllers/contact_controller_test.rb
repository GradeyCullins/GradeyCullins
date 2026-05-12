require "test_helper"

class ContactControllerTest < ActionDispatch::IntegrationTest
  setup do
    ActionMailer::Base.deliveries.clear
  end

  test "sends contact email when under the per-ip limit" do
    assert_difference "ActionMailer::Base.deliveries.size", 1 do
      post contact_url, params: {
        name: "Gradey",
        email: "gradey@example.com",
        company: "Acme",
        project_type: "AI integration/RAG",
        budget: "$15k-$50k",
        timeline: "1-3 months",
        message: "Hello there"
      }
    end

    assert_redirected_to contact_url
    follow_redirect!
    assert_response :success
    assert_includes @response.body, "Thanks - your message has been sent."
    email = ActionMailer::Base.deliveries.last
    assert_includes email.body.to_s, "Company: Acme"
    assert_includes email.body.to_s, "Project type: AI integration/RAG"
    assert_includes email.body.to_s, "Budget: $15k-$50k"
    assert_includes email.body.to_s, "Timeline: 1-3 months"
    assert_includes email.body.to_s, "Message:\nHello there"
    assert_equal 1, SiteVisit.find_by(ip_address: "127.0.0.1").contact_email_count
  end

  test "blocks contact email after five sends from the same ip" do
    visit = SiteVisit.track!("127.0.0.1")
    visit.update!(contact_email_count: 5)

    assert_no_difference "ActionMailer::Base.deliveries.size" do
      post contact_url, params: {
        name: "Gradey",
        email: "gradey@example.com",
        company: "Acme",
        project_type: "AI strategy/roadmap",
        budget: "Not sure yet",
        timeline: "Flexible",
        message: "Hello there"
      }
    end

    assert_response :too_many_requests
    assert_includes @response.body, "This IP address has reached the 5 message limit."
    assert_includes @response.body, "AI strategy/roadmap"
    assert_includes @response.body, "Not sure yet"
    assert_includes @response.body, "Flexible"
  end
end
