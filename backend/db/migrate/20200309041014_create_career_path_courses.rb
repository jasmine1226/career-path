class CreateCareerPathCourses < ActiveRecord::Migration[6.0]
  def change
    create_table :career_path_courses do |t|
      t.references :CareerPath
      t.references :Course

      t.timestamps
    end
  end
end
