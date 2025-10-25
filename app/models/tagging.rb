class Tagging < ApplicationRecord
  belongs_to :blog_post
  belongs_to :tag

  validates :blog_post_id, presence: true
  validates :tag_id, presence: true
  validates :tag_id, uniqueness: { scope: :blog_post_id }
end
