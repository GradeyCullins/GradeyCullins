class Tag < ApplicationRecord
  has_many :taggings, dependent: :destroy
  has_many :blog_posts, through: :taggings

  validates :name, presence: true, uniqueness: { case_sensitive: false }, length: { maximum: 64 }
  validates :slug, presence: true, uniqueness: { case_sensitive: false }, length: { maximum: 64 }

  before_validation :normalize_fields

  scope :alphabetical, -> { order(:name) }

  def as_json(options = nil)
    base_options = { only: %i[id name slug created_at updated_at] }
    super(base_options.merge(options || {})).merge(
      createdAt: created_at,
      updatedAt: updated_at
    )
  end

  private

  def normalize_fields
    self.name = name.to_s.strip
    self.slug = (slug.presence || name).to_s.parameterize
  end
end
