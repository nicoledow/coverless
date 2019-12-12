class UsersController < ApplicationController

    def create
      binding.pry
      new_user = User.create(params[:email], params[:password])
      render_json: new_user
    end

end