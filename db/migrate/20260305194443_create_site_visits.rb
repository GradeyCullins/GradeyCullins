class CreateSiteVisits < ActiveRecord::Migration[8.0]
  def change
    create_table :site_visits do |t|
      t.string :ip_address, null: false
      t.integer :view_count, null: false, default: 1
      t.datetime :first_visited_at, null: false
      t.datetime :last_visited_at, null: false

      t.timestamps
    end

    add_index :site_visits, :ip_address, unique: true
  end
end
