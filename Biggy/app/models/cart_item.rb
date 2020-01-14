class CartItem < ApplicationRecord
    belongs_to :customer_cart
    belongs_to :product
end
