Rails.application.routes.draw do
  resources :notes
  resources :clients
  resources :users
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }

  post "/login", to: 'users#login'
  get "/me", to: "users#me"
end
