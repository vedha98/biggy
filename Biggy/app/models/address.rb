class Address < ApplicationRecord
    attr_accessor :street,:city,:state,:country
    belongs_to :customer
    geocoded_by :address
    before_save :set_address
    def set_address      
        self.address = [street, city, state, "india"].compact.join(', ')
        geocode
    end
end
