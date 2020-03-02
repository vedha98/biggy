class CustomerCart < ApplicationRecord
    belongs_to :customer
    has_many :cart_items
    def clearCart
        self.cart_items.destroy_all
    end
end
