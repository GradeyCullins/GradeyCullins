class SiteVisit < ApplicationRecord
  validates :ip_address, presence: true, uniqueness: true
  validates :view_count, presence: true

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
end
