Rails.application.routes.draw do
  resources :users
  resources :artworks
  resources :collections
  resources :sessions
  post "/login", to: "sessions#login"
  delete "/logout", to: "sessions#destroy"
  post "/register", to: "users#create"
  post 'collections/newcollection', to: 'collections#newcollection'
  get '/users/:user_id/artworks', to: 'users#user_artworks'
  get "/me", to: "users#me"
  get "/me", to: "users#show" 
  post "/add_collection", to: "collections#newcollection"
  post "/artworks", to: "artworks#create"
  delete "artworks/delete/:artwork_id", to: 'artworks#destroy'
  # resources :sessions, only: [:create]
  # resources :registrations, only: [:create]
  # delete :logout, to: "sessions#logout"
  # get :logged_in, to: "sessions#logged_in"
  root to: "static#home"
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end