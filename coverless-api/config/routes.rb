Rails.application.routes.draw do
  post '/users', to: 'users#create'

  get '/books', to: 'books#index'

  resources :users, only: [:new, :create, :index, :show] do
    resources :liked_books, only: [:create]
  end
end
