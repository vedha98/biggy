class CreateCustomerCarts < ActiveRecord::Migration[6.0]
  def change
    create_table :customer_carts do |t|
      t.references :customer
      t.string :restaurant
      t.timestamps
    end
  end
end
