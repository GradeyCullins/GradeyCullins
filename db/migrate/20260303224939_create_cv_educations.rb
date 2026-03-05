class CreateCvEducations < ActiveRecord::Migration[8.0]
  def change
    create_table :cv_educations do |t|
      t.string :institution, null: false
      t.string :degree, null: false
      t.string :start_date, null: false
      t.string :end_date
      t.integer :position, null: false, default: 0

      t.timestamps
    end
  end
end
