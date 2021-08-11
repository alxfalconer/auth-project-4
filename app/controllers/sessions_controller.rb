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

    # def current_user
    #     @current_user ||= User.find(session[:id]) if session[:id]
    # end

    # def logged_in
    #     if logged_in?
    #         render json: { status: 201, user: current_user, logged_in: true}
    #     else
    #         render json: { status: 400, user: {}, logged_in: false}
    #     end
    # end

    def destroy
        session.delete :user_id
        render json: { message: "Logged Out"}
    end

end