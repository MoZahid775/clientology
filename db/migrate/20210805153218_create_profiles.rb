class CreateProfiles < ActiveRecord::Migration[6.1]
  def change
    create_table :profiles do |t|
      t.string :suit_size
      t.string :pant_size
      t.string :style
      t.string :shirt_size
      t.string :height
      t.string :shoe_size
      t.belongs_to :client, null: false, foreign_key: true

      t.timestamps
    end
  end
end
