Rails.application.routes.draw do
  resources :users
  resources :artworks
  resources :collections
  get '/users/:user_id/collections', to: 'users#user_collections'
  get "/me", to: "users#me"
  get "/me", to: "users#show"
  post '/login', to: 'sessions#login'
  delete '/logout', to: 'sessions#destroy'
  get 'logged_in', to: 'sessions#logged_in'
  post "/register", to: "users#create"
  post "/collections", to: "collections#new"
  post '/collections', to: 'collections#create'
  delete "collections/:collection_id", to: 'collections#destroy'
  patch "collections/:collection_id", to: 'collections#update' 
  root to: "static#home"

  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end