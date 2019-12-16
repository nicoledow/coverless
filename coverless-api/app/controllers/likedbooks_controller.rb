class LikedbooksController < ApplicationController

    def create
        binding.pry
        liked_book = LikedBook.create(
            isbn: params["isbn"], 
            title: params["title"], 
            author: params["author"],
            blurb: params["blurb"],
            url: params["book_uri"],
            image: params["img_url"]
            )
    end

    def index
        binding.pry
        liked_books = LikedBook.all
        render json: liked_books
    end
end