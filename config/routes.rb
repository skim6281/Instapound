Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root "static_pages#root"

  namespace :api, defaults: {format: :json} do
    resources :users, param: :username
    resource :session, only: [:create, :destroy, :show]
    resources :images, only: [:create, :destroy, :index, :new]
    resources :images, param: :username, only: [:show]
    resource :followings, only: [:create, :destroy]
  end

end
