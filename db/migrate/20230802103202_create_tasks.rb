class CreateTasks < ActiveRecord::Migration[7.0]
  def change
    create_table :tasks do |t|
      t.integer :taskid
      t.string :description
      t.boolean :is_complete

      t.timestamps
    end
  end
end
