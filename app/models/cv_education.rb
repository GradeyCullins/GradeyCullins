class CvEducation < ApplicationRecord
  validates :institution, presence: true
  validates :degree, presence: true
  validates :start_date, presence: true
  validates :position, presence: true

  scope :ordered, -> { order(position: :asc) }

  def date_range
    end_date.present? ? "#{start_date} - #{end_date}" : "#{start_date} - Present"
  end

  def as_json(options = nil)
    {
      id: id,
      institution: institution,
      degree: degree,
      startDate: start_date,
      endDate: end_date,
      dateRange: date_range,
      position: position
    }
  end
end
