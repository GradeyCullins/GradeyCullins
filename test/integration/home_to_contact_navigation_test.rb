require "application_system_test_case"

class HomeToContactNavigationTest < ApplicationSystemTestCase
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
    assert_field "Message"

    contact_details = {
      name: "Jim Jones",
      email: "jimjones@example.com",
      message: "this is my email message saaaar"
    }

    # Fill in the form
    fill_in "Name", with: contact_details[:name]
    fill_in "Email", with: contact_details[:email]
    fill_in "Message", with: contact_details[:message]

    # Check initial email count
    assert_difference "ActionMailer::Base.deliveries.size", +1 do
      # Submit the form
      click_button "Send" # Adjust button text as needed
    end

    # Assert we get redirected back to contact page (302 redirect)
    assert_current_path contact_path

    # Assert form inputs are cleared after submission
    assert_field "Name", with: ""
    assert_field "Email", with: ""
    assert_field "Message", with: ""

    # Verify the email was sent with correct details
    email = ActionMailer::Base.deliveries.last

    assert_equal ContactMailer.default[:from], email.from.first
    assert_includes email.body.to_s, contact_details[:message]
    assert_includes email.subject, contact_details[:name]
    assert_includes email.subject, contact_details[:email]
  end
end
