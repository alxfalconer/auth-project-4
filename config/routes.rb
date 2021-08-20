Rails.application.routes.draw do
  resources :users
  resources :artworks
  resources :collections
  get '/users/:user_id/collections', to: 'users#user_collections'
  get "/me", to: "users#me"
  post "/me", to: "users#me"
  post '/login', to: 'sessions#login'
  delete '/logout', to: 'sessions#destroy'
  get 'logged_in', to: 'sessions#logged_in'
  post "/register", to: "users#create"
  root to: "static#home"

  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end