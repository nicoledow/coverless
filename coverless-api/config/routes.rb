Rails.application.routes.draw do
  resources :reviews
  get '/', to: 'likedbooks#index'
  
  get '/likedbooks', to: 'likedbooks#index'
  get '/likedbooks/read', to: 'likedbooks#read'
  post '/likedbooks', to: 'likedbooks#create'
  delete '/likedbooks/:isbn', to: 'likedbooks#destroy'
  patch '/likedbooks/:isbn', to: 'likedbooks#update'

end
