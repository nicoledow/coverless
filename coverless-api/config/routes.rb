Rails.application.routes.draw do
  get '/likedbooks', to: 'likedbooks#index'
  post '/likedbooks', to: 'likedbooks#create'
end
