class AddContactFieldsToCvIntros < ActiveRecord::Migration[8.0]
  def change
    add_column :cv_intros, :linkedin_url, :string,
               null: false,
               default: "https://www.linkedin.com/in/gradey-cullins-738b2045/"
    add_column :cv_intros, :github_url, :string,
               null: false,
               default: "https://github.com/GradeyCullins"
    add_column :cv_intros, :email, :string,
               null: false,
               default: "gradeycullins@gmail.com"
  end
end
