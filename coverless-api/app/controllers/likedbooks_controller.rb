require 'pry'

class LikedbooksController < ApplicationController

    def create
        binding.pry
        liked_book = LikedBook.new(
            isbn: liked_book_params["primary_isbn10"], 
            title: liked_book_params["title"], 
            author: liked_book_params["author"],
            blurb: liked_book_params["description"],
            url: liked_book_params["book_uri"],
            image: liked_book_params["book_image"]
            )
        if liked_book.save
          render json: liked_book
        else
          alert("An error occurred. Please try again.")
        end
    end

    def index
        liked_books = LikedBook.all
        render json: liked_books
    end


    private
    def liked_book_params
      params.permit("primary_isbn10", "title", "author", "description", "book_uri", "book_image")
    end
end