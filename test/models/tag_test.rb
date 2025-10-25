require "test_helper"

class TagTest < ActiveSupport::TestCase
  test "fixture tag is valid" do
    assert tags(:writing).valid?
  end

  test "requires name" do
    tag = Tag.new
    assert_not tag.valid?
    assert_includes tag.errors[:name], "can't be blank"
  end

  test "enforces unique name case-insensitively" do
    tag = Tag.new(name: tags(:writing).name.upcase)

    assert_not tag.valid?
    assert_includes tag.errors[:name], "has already been taken"
  end

  test "auto populates slug from name" do
    tag = Tag.create!(name: "Rails & Ruby")
    assert_equal "rails-ruby", tag.slug
  end
end
