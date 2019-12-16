Rails.application.routes.draw do

  get '/books', to: 'books#index'

  post '/likedbooks', to: 'likedbooks#create'
  get '/likedbooks', to: 'likedbooks#index'
end
