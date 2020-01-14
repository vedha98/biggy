class Product < ApplicationRecord
    belongs_to :restaurant
    validates :name, presence: true
    validates :category, presence: true
    validates :price,presence: true
    mount_uploader :image , ImageUploader
    

def createProduct

  
end
end