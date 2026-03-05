class CreateCvIntros < ActiveRecord::Migration[8.0]
  def change
    create_table :cv_intros do |t|
      t.text :summary, null: false

      t.timestamps
    end
  end
end
