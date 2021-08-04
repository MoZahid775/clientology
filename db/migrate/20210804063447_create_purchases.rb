class CreatePurchases < ActiveRecord::Migration[6.1]
  def change
    create_table :purchases do |t|
      t.string :product_name
      t.string :size
      t.string :date_of_purchase
      t.float :dollar_amt
      t.boolean :return_indicator
      t.belongs_to :client, null: false, foreign_key: true

      t.timestamps
    end
  end
end
