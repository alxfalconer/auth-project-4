Rails.application.routes.draw do
  resources :users
  resources :artworks
  resources :collections
  get '/users/:id', to: 'users#show' 
  get '/artworks/states', to: 'artworks#show'
  get "/me", to: "sessions#show"
  post '/login', to: 'sessions#login'
  delete '/logout', to: 'sessions#destroy'
  post "/register", to: "users#create"
  root to: "static#home"

  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end