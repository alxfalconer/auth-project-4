class UsersController < ApplicationController

    def index
        users = User.all
        render json: users, include: ['collections', 'collections.artworks']
    end

    def show
      user = User.find_by(id: session[:user_id])
      if user
        render json: user
      else
        render json: { error: "Not authorized" }, status: :unauthorized
      end
    end
  

    def create
        user = User.create!(user_params)
    
        if user
          session[:user_id] = user.id
          render json: {
            status: :created,
            user: user
          }
        else
          render json: { status: 500 }
        end
      end

    def me
        user = User.find_by(id: session[:user_id])
        if user
          render json: user
        else
          render json: { error: "Not authorized" }, status: :unauthorized
        end
    end

    # def user_artworks
    #     user = User.find(params[:user_id])
    #     artworks = user.artworks
    #     render json: artworks, include: :user
    # end

    private

    def user_params
        params.permit(:email, :password, :name, :collection)
    end
end