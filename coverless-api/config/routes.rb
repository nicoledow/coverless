Rails.application.routes.draw do
  get '/', to: 'likedbooks#index'
  
  get '/likedbooks', to: 'likedbooks#index'
  post '/likedbooks', to: 'likedbooks#create'
  delete '/likedbooks/:isbn', to: 'likedbooks#destroy'
end
