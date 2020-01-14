class CreateAddresses < ActiveRecord::Migration[6.0]
  def change
    create_table :addresses do |t|
      t.string :address, null:false
      t.float :latitude,null:false
      t.float :longitude , null:false
      t.belongs_to :customer
      t.timestamps
    end
  end
end
