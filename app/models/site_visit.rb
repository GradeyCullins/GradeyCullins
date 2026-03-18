class SiteVisit < ApplicationRecord
  CONTACT_EMAIL_LIMIT = 5

  validates :ip_address, presence: true, uniqueness: true
  validates :contact_email_count, presence: true
  validates :view_count, presence: true

  def self.contact_email_allowed?(ip)
    find_or_initialize_by(ip_address: ip).contact_email_count.to_i < CONTACT_EMAIL_LIMIT
  end

  def self.record_contact_email!(ip)
    transaction do
      visit = lock.find_or_initialize_by(ip_address: ip)

        visit.contact_email_count ||= 0
        raise ContactEmailLimitReached if visit.contact_email_count >= CONTACT_EMAIL_LIMIT

        now = Time.current
        if visit.new_record?
          visit.view_count ||= 0
          visit.first_visited_at ||= now
          visit.last_visited_at ||= now
        end

        visit.contact_email_count += 1
        visit.save!
      visit
    end
  end

  def self.track!(ip)
    now = Time.current
    visit = find_or_initialize_by(ip_address: ip)

    if visit.new_record?
      visit.view_count = 1
      visit.first_visited_at = now
    else
      visit.view_count += 1
    end

    visit.last_visited_at = now
    visit.save!
    visit
  end

  class ContactEmailLimitReached < StandardError; end
end
