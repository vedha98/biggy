class CreateCartItems < ActiveRecord::Migration[6.0]
  def change
    create_table :cart_items do |t|
      t.references :customer_cart
      t.references :product
      t.integer :quantity,:default => 1
      t.timestamps
    end
  end
end
