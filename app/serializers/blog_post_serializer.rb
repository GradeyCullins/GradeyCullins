class BlogPostSerializer < ActiveModel::Serializer
  attributes :id,
             :title,
             :slug,
             :excerpt,
             :content_mdx,
             :content,
             :contentMdx,
             :status,
             :published_at,
             :publishedAt,
             :created_at,
             :createdAt,
             :updated_at,
             :updatedAt,
             :href

  has_many :tags, serializer: TagSerializer

  def content
    object.content_mdx
  end

  def contentMdx
    object.content_mdx
  end

  def status
    object.status
  end

  def publishedAt
    object.published_at
  end

  def createdAt
    object.created_at
  end

  def updatedAt
    object.updated_at
  end

  def href
    object.href
  end
end
