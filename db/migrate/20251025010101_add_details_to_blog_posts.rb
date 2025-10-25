class AddDetailsToBlogPosts < ActiveRecord::Migration[8.0]
  class BlogPost < ApplicationRecord
    self.table_name = "blog_posts"
  end

  def up
    rename_column :blog_posts, :content, :content_mdx

    add_column :blog_posts, :slug, :string
    add_column :blog_posts, :excerpt, :text, null: false, default: ""
    add_column :blog_posts, :status, :integer, null: false, default: 0
    add_column :blog_posts, :published_at, :datetime

    add_index :blog_posts, :slug, unique: true
    add_index :blog_posts, :status
    add_index :blog_posts, :published_at

    BlogPost.reset_column_information
    say_with_time "Backfilling blog post slugs" do
      BlogPost.find_each do |post|
        post_title = post.title.presence || "untitled-#{post.id}"
        base_slug = post_title.parameterize
        candidate = base_slug
        sequence = 2

        while BlogPost.where.not(id: post.id).exists?(slug: candidate)
          candidate = "#{base_slug}-#{sequence}"
          sequence += 1
        end

        excerpt_source = post.excerpt.presence ||
                         post.content_mdx.to_s.strip.split("\n").first.to_s
        excerpt_value = excerpt_source.truncate(320)

        post.update_columns(
          slug: candidate.presence || "post-#{post.id}",
          excerpt: excerpt_value.presence || post_title
        )
      end
    end

    change_column_default :blog_posts, :excerpt, from: "", to: nil
    change_column_null :blog_posts, :slug, false
  end

  def down
    remove_index :blog_posts, column: :published_at
    remove_index :blog_posts, column: :status
    remove_index :blog_posts, column: :slug

    remove_column :blog_posts, :published_at
    remove_column :blog_posts, :status
    remove_column :blog_posts, :excerpt
    remove_column :blog_posts, :slug

    rename_column :blog_posts, :content_mdx, :content
  end
end
