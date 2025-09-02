class CreateBlogPosts < ActiveRecord::Migration[8.0]
  def change
    create_table :blog_posts do |t|
      t.string :title, null: false
      t.text :content, null: false

      t.timestamps
    end

    add_index :blog_posts, :title, unique: true
  end
end
