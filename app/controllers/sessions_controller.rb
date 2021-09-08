class SessionsController < ApplicationController

    def login
      session[:init] = true
        @user = User.find_by(email: params[:email])
        if @user&.authenticate(params[:password])
        session[:user_id] = @user.id
        render json: @user, status: :accepted
        p "****"
        p session[:user_id]
        else
            render json: { error: "Incorrect email and/or password"}, status: :unauthorized
        end
    end

    def destroy
      session[:init] = true
        session.delete :user_id
        render json: { message: "Logged Out"}
    end

    def show
		user = User.find_by(id: session[:user_id])
		if user
		  render json: user
		else
		  render json: { error: "Not authorized" }, status: :unauthorized
		end
  end

  private                          
  def init_user                     
    p session.loaded?               
    p session                       
    session[:init] = true           
    p session.loaded?               
    p session                       
    @user ||= User.find_by_id(session[:user_id])
  end    

end