class ReviewsController < ApplicationController

    def index
        @reviews = Review.all
        render json: @reviews, status: :ok
    end

    def show
        review = Review.find_by(id: params[:id])
        render json: review
    end

    def create
        @review = Review.new(review_params)
        @review.save
        render json: @review, status: :created
    end

    def update
        if @review.update(review_params)
          render json: @review
        else
          render json: @review.errors, status: :unprocessable_entity
        end
    end

    def destroy
        @review = Review.where(id: params[:id]).first
        if @review.destroy
            head(:ok)
        else
            head(:unprocessable_entity)
        end
    end

    def new
        user = User.find_by(id: session[:user_id])
        review = user.reviews.new(reviews_params)
        if review.save
            render json: review, status: :created
        else
            render json: { error: "Not Created" }, status: :bad_request
        end 
    end

    private 

    def set_review
        @review = Review.find(params[:id])
    end
    
    def review_params
    params.require(:review).permit(:user_id, :body, :user, :album)
    end
end