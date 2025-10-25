require "test_helper"

class BlogPostTest < ActiveSupport::TestCase
  include ActiveSupport::Testing::TimeHelpers

  test "fixture blog post is valid" do
    assert blog_posts(:published).valid?
  end

  test "requires a title" do
    post = BlogPost.new(
      excerpt: "Example excerpt",
      content_mdx: "# Heading",
      status: :draft
    )

    assert_not post.valid?
    assert_includes post.errors[:title], "can't be blank"
  end

  test "enforces unique title case-insensitively" do
    existing = blog_posts(:published)
    duplicate = BlogPost.new(
      title: existing.title.upcase,
      excerpt: "Another excerpt",
      content_mdx: "# Content",
      status: :draft
    )

    assert_not duplicate.valid?
    assert_includes duplicate.errors[:title], "has already been taken"
  end

  test "auto generates slug from title when missing" do
    post = BlogPost.create!(
      title: "Hello World Post",
      excerpt: "Summary",
      content_mdx: "# Hello",
      status: :draft
    )

    assert_equal "hello-world-post", post.slug
  end

  test "sets published_at when publishing a draft" do
    post = blog_posts(:draft)

    freeze_time do
      post.update!(status: :published)
      assert_equal Time.current, post.published_at
    end
  end

  test "clears published_at when reverting to draft" do
    post = blog_posts(:published)

    assert_not_nil post.published_at

    post.update!(status: :draft)

    assert_nil post.published_at
  end

  test "requires mdx content" do
    post = BlogPost.new(
      title: "No Content",
      excerpt: "Missing content",
      status: :draft
    )

    assert_not post.valid?
    assert_includes post.errors[:content_mdx], "can't be blank"
  end

  test "requires excerpt" do
    post = BlogPost.new(
      title: "Post without excerpt",
      content_mdx: "# Hello",
      status: :draft
    )

    assert_not post.valid?
    assert_includes post.errors[:excerpt], "can't be blank"
  end

  test "manages tag associations" do
    post = blog_posts(:published)
    assert_equal ["Writing"], post.tags.pluck(:name)
  end
end
