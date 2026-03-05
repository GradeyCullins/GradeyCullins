class CvRole < ApplicationRecord
  validates :title, presence: true
  validates :company, presence: true
  validates :description, presence: true
  validates :start_date, presence: true
  validates :position, presence: true

  scope :ordered, -> { order(position: :asc) }

  def date_range
    end_date.present? ? "#{start_date} – #{end_date}" : "#{start_date} – Present"
  end

  def as_json(options = nil)
    {
      id: id,
      title: title,
      company: company,
      companyUrl: company_url,
      description: description,
      highlights: highlights || [],
      startDate: start_date,
      endDate: end_date,
      dateRange: date_range,
      position: position
    }
  end
end
