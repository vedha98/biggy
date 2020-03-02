class ProductsController < ApplicationController
    before_action :authenticate_restaurant!
    

    def new
        @product = Product.new 
    end
    def create
        @restaurant = current_restaurant
        @restaurant.products.create(product_params)
        redirect_to products_url
     
    end
    def index
        @products = current_restaurant.products.all
        
    end
    def edit
        @product = current_restaurant.products.find(params[:id])
    end
    def update
        @product = current_restaurant.products.find(params[:id])
        @product.image.cache!
        if @product.update_attributes(product_params)
          flash[:success] = "Object was successfully updated"
          redirect_to products_url
        else
          flash[:error] = "Something went wrong"
          render 'edit'
        end
    end
    
    
    def destroy
        @product = Product.find(params[:id])
        if @product.destroy
            flash[:success] = 'Object was successfully deleted.'
            redirect_to products_url
        else
            flash[:error] = 'Something went wrong'
            redirect_to products_url
        end
    end
    
private
    def product_params
        params.require(:product).permit(:name,:category,:price,:image)
    end
end
