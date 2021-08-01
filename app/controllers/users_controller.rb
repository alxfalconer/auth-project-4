class UsersController < ApplicationController

    def index
        users = User.all
        render json: users
    end

    def show #profile
        user = User.find_by(id: params[:id])
        render json: user
    end

    def create #signup
        user = User.new(user_params)
        if user.save
            session[:user_id] = user.id
            render json: user, status: :created
        else
            render json: { error: "Not Created"}, status: :bad_request
        end
    end

    def me #maintain login
        user = User.find_by(id: session[:user_id])
        if user
          render json: user
        else
          render json: { error: "Not authorized" }, status: :unauthorized
        end
    end

    def user_reviews
        user = User.find(params[:user_id])
        reviews = user.reviews
        render json: reviews, include: :user
    end

    private

    def user_params
        params.permit(:email, :password)
    end
end


# class UsersController < ApplicationController

#     def index
#         @users = User.all
#         render json: @users, status: :ok
#     end

#     def show
#         render json: @user
#     end

#     def create

#         @user = User.new(user_params)
#         @user.save
#         render json: @user, status: :created
#     end

#     def update
#         if @user.update(user_params)
#           render json: @user
#         else
#           render json: @user.errors, status: :unprocessable_entity
#         end
#     end

#     def destroy
#         @user = User.where(id: params[:id]).first
#         if @user.destroy
#             head(:ok)
#         else
#             head(:unprocessable_entity)
#         end
#     end

#     private 

#     def set_user
#         @user = User.find(params[:id])
#     end
    
#     def user_params
#     params.require(:user).permit(:name, :email, :password)
#     end
# end