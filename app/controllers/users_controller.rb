class UsersController < ApplicationController

    def index
        @users = User.all
        render json: @users, status: :ok
    end

    def show
        render json: @user
    end

    def create

        @user = User.new(user_params)
        @user.save
        render json: @user, status: :created
    end

    def update
        if @user.update(user_params)
          render json: @user
        else
          render json: @user.errors, status: :unprocessable_entity
        end
    end

    def destroy
        @user = User.where(id: params[:id]).first
        if @user.destroy
            head(:ok)
        else
            head(:unprocessable_entity)
        end
    end

    private 

    def set_user
        @user = User.find(params[:id])
    end
    
    def user_params
    params.require(:user).permit(:name, :email, :password)
    end
end