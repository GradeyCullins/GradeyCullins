class BlogPost < ApplicationRecord
  validates :title, presence: true, uniqueness: true
  validates :content, presence: true

  def href
    "/blog/#{URI.encode_uri_component(title)}"
  end

  def as_json(options = nil)
    super(options).merge(
      createdAt: created_at,
      updatedAt: updated_at,
      href: href
    )
  end
end
