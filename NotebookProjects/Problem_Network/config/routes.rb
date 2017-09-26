Rails.application.routes.draw do
   resources :users
   resources :posts
  #when do i want to use nested resources in rails?
  root 'posts#index'
   resources :users do 
   	resources :posts
   end
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
