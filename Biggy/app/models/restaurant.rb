class Restaurant < ApplicationRecord
  attr_accessor :street,:city,:state,:country
  has_many :products
  mount_uploader :image , RestaurantUploader
  geocoded_by :address
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable
  before_save :set_address
        def set_address 
          if street && city && state     
          self.address = [street, city, state, "india"].compact.join(', ')
          geocode
          end
        end
end
