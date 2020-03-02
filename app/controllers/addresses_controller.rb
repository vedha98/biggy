class AddressesController < ApplicationController
  before_action :authenticate_customer!
  def index
  end
  def new
  @address = Address.new
  end
  def create
    @customer = current_customer
    @address = @customer.addresses.create(create_params)
    @customer.update(addressId:@address.id)
  redirect_to customers_path
  end
  private
  def create_params
    params.require(:address).permit(:street,:city,:state)
  end


end
