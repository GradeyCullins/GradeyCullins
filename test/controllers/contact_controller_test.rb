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
        message: "Hello there"
      }
    end

    assert_redirected_to contact_url
    follow_redirect!
    assert_response :success
    assert_includes @response.body, "Thanks - your message has been sent."
    assert_equal 1, SiteVisit.find_by(ip_address: "127.0.0.1").contact_email_count
  end

  test "blocks contact email after five sends from the same ip" do
    visit = SiteVisit.track!("127.0.0.1")
    visit.update!(contact_email_count: 5)

    assert_no_difference "ActionMailer::Base.deliveries.size" do
      post contact_url, params: {
        name: "Gradey",
        email: "gradey@example.com",
        message: "Hello there"
      }
    end

    assert_response :too_many_requests
    assert_includes @response.body, "This IP address has reached the 5 message limit."
  end
end
