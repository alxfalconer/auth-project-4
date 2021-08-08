class CollectionsController < ApplicationController

    
    def index 
        collections = Collection.all
        render json: collections
    end 

    def create
        collection = Collection.create(collection_params)
        render json: collection
    end

    def newcollection
        collection = Collection.create(user_id: collection_params[:user_id])
        artwork = Artwork.create(collection_id: collection.id)
        user = User.find(collection_params[:user_id])
        user.update(current_collection: collection.id)
        artwork = collection.artworks
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