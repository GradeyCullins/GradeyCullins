require "test_helper"

class TaggingTest < ActiveSupport::TestCase
  test "fixture tagging is valid" do
    assert taggings(:published_writing).valid?
  end

  test "requires unique tag per post" do
    existing = taggings(:published_writing)
    duplicate = Tagging.new(blog_post: existing.blog_post, tag: existing.tag)

    assert_not duplicate.valid?
    assert_includes duplicate.errors[:tag_id], "has already been taken"
  end
end
