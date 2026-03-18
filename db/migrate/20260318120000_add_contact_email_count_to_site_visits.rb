class AddContactEmailCountToSiteVisits < ActiveRecord::Migration[8.0]
  def change
    add_column :site_visits, :contact_email_count, :integer, default: 0, null: false
  end
end
