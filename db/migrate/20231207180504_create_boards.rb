class CreateBoards < ActiveRecord::Migration[7.1]
  def change
    create_table :boards do |t|
      t.string :name
      t.boolean :static
      t.integer :user_id
      t.boolean :favorite

      t.timestamps
    end
  end
end
