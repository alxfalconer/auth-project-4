Rails.application.routes.draw do
  resources :users
  resources :reviews
  get '/users/:user_id/reviews', to: 'users#user_reviews'
  get "/me", to: "users#me"
  post "/signup", to: "users#create"
  post "/login", to: "sessions#login"
  post "/add_review", to: "reviews#new"
  delete "/logout", to: "sessions#destroy"
  delete "reviews/delete/:review_id", to: 'reviews#destroy'
  # resources :sessions, only: [:create]
  # resources :registrations, only: [:create]
  # delete :logout, to: "sessions#logout"
  # get :logged_in, to: "sessions#logged_in"
  root to: "static#home"
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end

# Rails.application.routes.draw do
#   root to: "static#home"
#   resources :reviews
#   resources :albums
#   resources :users
#   get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
# end