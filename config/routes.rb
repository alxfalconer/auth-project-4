Rails.application.routes.draw do
  resources :users
  resources :artworks
  resources :collections
  resources :sessions
  post "/login", to: "sessions#login"
  delete "/logout", to: "sessions#destroy"
  post "/register", to: "users#create"
  post '/collections', to: 'collections#create'
  get '/users/:user_id/artworks', to: 'users#user_artworks'
  get "/me", to: "users#me"
  get "/me", to: "users#show" 
  post "/artworks", to: "artworks#create"
  delete "artworks/delete/:artwork_id", to: 'artworks#destroy'
  root to: "static#home"
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end