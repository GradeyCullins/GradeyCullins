require "application_system_test_case"

class HomeToContactNavigationTest < ApplicationSystemTestCase
  setup do
    ActionMailer::Base.deliveries.clear
    SiteVisit.delete_all
  end

  test "visiting the home page and navigating to contact form" do
    # Visit the home page
    visit root_path

    # Verify we're on the home page (you can adjust this assertion based on your home page content)
    assert_current_path root_path

    # Navigate to contact page (adjust the link text/selector to match your actual navigation)
    click_link "Contact" # or use click_on "Contact" or find_link("Contact").click

    # Verify we're now on the contact page
    assert_current_path contact_path

    # Verify the contact form is present
    assert_selector "form" # Basic form presence check

    # Verify specific form fields exist
    assert_field "Name"
    assert_field "Email"
    assert_field "Project type"
    assert_field "What should we build?"

    contact_details = {
      name: "Jim Jones",
      email: "jimjones@example.com",
      project_type: "AI product build",
      message: "this is my email message saaaar"
    }

    # Fill in the form
    fill_in "Name", with: contact_details[:name]
    fill_in "Email", with: contact_details[:email]
    select contact_details[:project_type], from: "Project type"
    fill_in "What should we build?", with: contact_details[:message]

    # Check initial email count
    assert_difference "ActionMailer::Base.deliveries.size", +1 do
      # Submit the form
      click_button "Send request"
      assert_text "Thanks - your message has been sent."
    end

    # Assert we get redirected back to contact page (302 redirect)
    assert_current_path contact_path

    # Assert form inputs are cleared after submission
    assert_field "Name", with: ""
    assert_field "Email", with: ""
    assert_field "Project type", with: ""
    assert_field "What should we build?", with: ""

    # Verify the email was sent with correct details
    email = ActionMailer::Base.deliveries.last

    assert_equal ContactMailer.default[:from], email.from.first
    assert_includes email.body.to_s, contact_details[:message]
    assert_includes email.body.to_s, contact_details[:project_type]
    assert_includes email.subject, contact_details[:name]
    assert_includes email.subject, contact_details[:email]
  end
end
