Rails.application.routes.draw do
  
  
  
  post '/login', to: "sessions#create"
  delete '/logout', to: "sessions#destroy"
  
  get 'users/:id', to: "users#show"

  
  post '/signup', to: "users#create"
  post '/trails', to: "trails#show"
  
  # get '/trails', to: "trails#index"
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end