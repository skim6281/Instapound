class CreateImages < ActiveRecord::Migration[5.0]
  def change
    create_table :images do |t|
      t.string :image_url, null: false
      t.text :caption
      t.string :location
      t.integer :user_id, null: false

      t.timestamps
    end
  end
end
