class CreateImages < ActiveRecord::Migration[7.1]
  def change
    create_table :images do |t|
      t.string :label
      t.boolean :private
      t.string :category
      t.boolean :ai_generated
      t.string :ai_prompt

      t.timestamps
    end
  end
end
