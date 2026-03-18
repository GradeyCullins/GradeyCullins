require "test_helper"

class SiteVisitTest < ActiveSupport::TestCase
  test "track! creates a new record for a new IP" do
    assert_difference "SiteVisit.count", 1 do
      visit = SiteVisit.track!("10.0.0.1")
      assert_equal 1, visit.view_count
      assert_not_nil visit.first_visited_at
      assert_not_nil visit.last_visited_at
    end
  end

  test "track! increments view_count for an existing IP" do
    SiteVisit.track!("10.0.0.2")

    assert_no_difference "SiteVisit.count" do
      visit = SiteVisit.track!("10.0.0.2")
      assert_equal 2, visit.view_count
    end
  end

  test "track! updates last_visited_at on repeat visit" do
    first = SiteVisit.track!("10.0.0.3")
    first_time = first.last_visited_at

    travel 1.hour do
      second = SiteVisit.track!("10.0.0.3")
      assert second.last_visited_at > first_time
      assert_equal first.first_visited_at, second.first_visited_at
    end
  end

  test "track! keeps separate records for different IPs" do
    SiteVisit.track!("10.0.0.4")
    SiteVisit.track!("10.0.0.5")

    assert_equal 1, SiteVisit.find_by(ip_address: "10.0.0.4").view_count
    assert_equal 1, SiteVisit.find_by(ip_address: "10.0.0.5").view_count
  end

  test "record_contact_email! increments the contact email count" do
    visit = SiteVisit.record_contact_email!("10.0.0.6")

    assert_equal 1, visit.contact_email_count
    assert_equal 1, visit.view_count
    assert_not_nil visit.first_visited_at
    assert_not_nil visit.last_visited_at
  end

  test "contact_email_allowed? returns false after five emails" do
    5.times { SiteVisit.record_contact_email!("10.0.0.7") }

    assert_not SiteVisit.contact_email_allowed?("10.0.0.7")
  end

  test "record_contact_email! raises after five emails" do
    5.times { SiteVisit.record_contact_email!("10.0.0.8") }

    assert_raises(SiteVisit::ContactEmailLimitReached) do
      SiteVisit.record_contact_email!("10.0.0.8")
    end
  end
end
