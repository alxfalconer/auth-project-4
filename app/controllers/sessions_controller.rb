class SessionsController < ApplicationController

    def login
        user = User.find_by(email: params[:email])
        if user&.authenticate(params[:password])
        session[:user_id] = user.id
        render json: user, status: :accepted
        else
            render json: { error: "Incorrect email and/or password"}, status: :unauthorized
        end
    end

    def destroy
        session.delete :user_id
        render json: { message: "Logged Out"}
    end

end



# class SessionsController < ApplicationController
  
#     def create
#       user = User
#               .find_by(email: params["user"]["email"])
#               .try(:authenticate, params["user"]["password"])
  
#       if user
#         session[:user_id] = user.id
#         render json: {
#           status: :created,
#           logged_in: true,
#           user: user
#         }
#       else
#         render json: { status: 401 }
#       end
#     end

#     def set_current_user
#         if session[:user_id]
#           @current_user = User.find(session[:user_id])
#         end
#     end
  
#     def login
#       if @current_user
#         render json: {
#           logged_in: true,
#           user: @current_user
#         }
#       else
#         render json: {
#           logged_in: false
#         }
#       end
#     end
  
#     def logout
#       reset_session
#       render json: { status: 200, logged_out: true }
#     end
#   end