class CustomersController < ApplicationController
  
  before_action :authenticate_customer! ,:set_address , :set_cart

  def index
    set_address
    @restaurants = Restaurant.near([@address.latitude,@address.longitude],10)
  end
  def products
    @restaurant = Restaurant.find_by(id:params[:id])
    @products = @restaurant.products.all
    
  end
  def change_address
    puts "change la irunthu"
    current_customer.addressId = params[:address]
    current_customer.save
    redirect_to customers_path


  end
  def cart_create
    puts "create la irunthu"
    @exist = @cart.cart_items.find_by(product_id:params[:product])
    if @exist.present?
      @exist.increment!(:quantity)
    else
    @cart_item = CartItem.new
    @cart_item.customer_cart = @cart
    @product = Product.find(params[:product])
    @cart_item.product = @product
    @cart.restaurant = @product.restaurant_id
    @cart.save
    @cart_item.save
    end
  end
  def view_cart
       @sum =0
      
      @cart.cart_items.each do |item|
        product = item.product
        @sum+=product.price.to_i*item.quantity
      end
      
  end
  
  
  private
  def set_address
    if(!current_customer.addressId)
      redirect_to new_address_path
    else
      @address = Address.find(current_customer.addressId)  
    end
  end

  def set_cart
    @cart = current_customer.customer_cart
    if !@cart
         @cart = CustomerCart.new
         current_customer.customer_cart = @cart
         @cart.save
    end
  end
end
