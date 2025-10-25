require "securerandom"

class BlogPost < ApplicationRecord
  enum :status, { draft: 0, published: 1 }

  has_many :taggings, dependent: :destroy
  has_many :tags, through: :taggings

  accepts_nested_attributes_for :tags,
                                allow_destroy: false,
                                reject_if: proc { |attrs| attrs["id"].blank? && attrs["name"].to_s.strip.blank? }

  validates :title, presence: true, uniqueness: { case_sensitive: false }, length: { maximum: 160 }
  validates :slug, presence: true, uniqueness: { case_sensitive: false }, length: { maximum: 160 }
  validates :excerpt, presence: true, length: { maximum: 320 }
  validates :content_mdx, presence: true
  validates :status, presence: true

  before_validation :normalize_text_fields
  before_validation :generate_slug, if: -> { slug.blank? && title.present? }
  before_save :manage_published_at

  scope :recent_first, -> { order(Arel.sql("COALESCE(published_at, created_at) DESC")) }

  def href
    "/blog/#{slug}"
  end

  def as_json(options = nil)
    serialized_tags = tags.order(:name).map { |tag| tag.as_json(only: %i[id name slug]) }
    base_options = {
      only: %i[id title slug excerpt content_mdx created_at updated_at]
    }
    super(base_options.merge(options || {})).merge(
      status: status,
      content: content_mdx,
      contentMdx: content_mdx,
      createdAt: created_at,
      updatedAt: updated_at,
      publishedAt: published_at,
      href: href,
      tags: serialized_tags
    )
  end

  private

  def normalize_text_fields
    self.title = title.to_s.strip
    self.slug = slug.to_s.parameterize if slug.present?
    self.excerpt = excerpt.to_s.strip
  end

  def generate_slug
    base_slug = title.to_s.parameterize
    candidate = base_slug
    suffix = 2

    while self.class.where.not(id: id).exists?(slug: candidate)
      candidate = "#{base_slug}-#{suffix}"
      suffix += 1
    end

    self.slug = candidate.presence || SecureRandom.hex(4)
  end

  def manage_published_at
    if published? && published_at.blank?
      self.published_at = Time.current
    elsif draft? && will_save_change_to_status? && !published?
      self.published_at = nil
    end
  end
end
