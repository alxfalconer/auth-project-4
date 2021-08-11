class CollectionsController < ApplicationController
    before_action :has_session

    def index
        collections = Collection.all
        render json: collections
    end

    def create
        collection = Collection.create(collection_params)
        render json: collection
        # user = User.find_by(id: session[:user_id])
        # p session
        # p session[:user_id]
        # p "*****"
        # collection = user.collections.create(collection_params)
        # render json: collection
    end

    def new
        user = User.find_by(id: session[:user_id])
        p session
        p session[:user_id]
        p "*****"
        collection = user.collections.new(collection_params)
        if collection.save
            render json: collection, status: :created
        else
            render json: { error: "Not Created" }, status: :bad_request
        end 
    end

    def show 
        collection = Collection.find(id: params[:id])
        render json: collection
    end 

    def update
        collection = Collection.find(id: params[:id])
        collection.update(collection_params)
        render json: collection
    end 

    def destroy
        collection = Collection.find(id: params[:id])
        collection.destroy
        render json: collection
    end

    private

    def has_session
        session["init"] = true
    end

    def collection_params
        params.permit(:user_id)
    end 

end