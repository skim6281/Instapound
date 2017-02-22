Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root "static_pages#root"

  namespace :api, defaults: {format: :json} do
    resources :users, param: :username do
      resources :images, only: [:index]
    end
    resource :session, only: [:create, :destroy, :show]
    resources :images, only: [:create, :destroy, :show] do
      resources :comments, only: [:index]
    end
    resources :followings, only: [:create, :destroy]
    resources :likes, only: [:create, :destroy]
  end

end
