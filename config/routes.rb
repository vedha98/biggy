Rails.application.routes.draw do
  get 'customers/index'
  get 'address/index'
  devise_for :customers ,path: 'customers',controllers:{
    sessions: 'customers/sessions',
    registrations:'customers/registrations'

  }
  devise_for :restaurants,path:'restaurants', controllers: {
        sessions: 'restaurants/sessions',
        registrations: 'restaurants/registrations'
      }
      get 'customers/viewcart' ,to: 'customers#view_cart',:as => :view_cart
      get "/customers/restaurant/:id", to: "customers#products",:as => :customers_path
      post "/customers/cart_items",to: "customers#cart_create",:as=>:create_cart_item
      post '/customers/change_address',to: "customers#change_address",:as=>:change_address
      get "/customers", to: "customers#index"
      
     
  resources:products ,path: 'restaurants/products'
  resources:addresses, path:"customers/addresses"
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  root to: "home#index"
end
