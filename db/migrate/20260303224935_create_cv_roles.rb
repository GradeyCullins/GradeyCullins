class CreateCvRoles < ActiveRecord::Migration[8.0]
  def change
    create_table :cv_roles do |t|
      t.string :title, null: false
      t.string :company, null: false
      t.string :company_url
      t.text :description, null: false
      t.json :highlights, default: []
      t.string :start_date, null: false
      t.string :end_date
      t.integer :position, null: false, default: 0

      t.timestamps
    end
  end
end
