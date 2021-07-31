Rails.application.routes.draw do
  root to: "static#home"
  resources :users
  resources :reviews
  resources :albums
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end