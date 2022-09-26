class UsersController < ApplicationController

    def create
        user = User.create!(user_params)
        session[:user_id] = user.user_id
        render json: user, status: ok
    end

    def show
        user = User.find(params[:id])
        render json: user, status: ok
    private
    
    def user_params
        params.permit(:username, :password)
    end
end
