class User < ApplicationRecord
    has_many :reviews
    has_many :books, through: :reviews #replace with liked_books ?
    has_many :liked_books
end
