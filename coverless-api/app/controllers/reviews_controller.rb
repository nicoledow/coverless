class ReviewsController < ApplicationController

    def create
    render json: Review.all #need to change!!
    end
end
