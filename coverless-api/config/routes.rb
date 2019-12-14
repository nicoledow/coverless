Rails.application.routes.draw do
  post '/users', to: 'users#create'
  get '/books', to: 'books#index'
end
