Rails.application.routes.draw do
  resources :users
  resources :artworks
  get '/users/:user_id/artworks', to: 'users#user_artworks'
  get "/me", to: "users#me"
  post "/register", to: "users#create"
  post "/login", to: "sessions#login"
  delete "/logout", to: "sessions#destroy"
  post "/artworks", to: "artworks#create"
  delete "artworks/delete/:artwork_id", to: 'artworks#destroy'
  # resources :sessions, only: [:create]
  # resources :registrations, only: [:create]
  # delete :logout, to: "sessions#logout"
  # get :logged_in, to: "sessions#logged_in"
  root to: "static#home"
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end