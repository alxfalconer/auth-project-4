class CollectionsController < ApplicationController

    def index 
        collections = Collection.all
        render json: collections
    end

    def create
        user = User.find_by(id: session[:user_id])
        collection = user.collections.create(user_id: session[:user_id])
        render json: collection
    end

    def newcollection
        collection = Collection.create(user_id: collection_params[:user_id])
        user = User.find(collection_params[:user_id])
        user.update(current_collection: collection.id)
        collection.save
    end

    def show 
        collection = Collection.find(params[:id])
        render json: collection
    end 

    def update
        collection = Collection.find(params[:id])
        collection.update(collection_params)
        render json: collection
    end 

    def destroy
        collection = Collection.find(params[:id])
        collection.destroy
        render json: collection
    end 

    private 
    def collection_params
        params.permit(:user_id)
    end 

end