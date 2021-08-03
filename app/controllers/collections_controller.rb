class CollectionsController < ApplicationController
    
    def index 
        collections = Collection.all 
        render json: collections
    end

    def show 
        collection_id = params[:id].to_i
        collection = Collection.find_by_id(collection_id)
        render json: collection
    end

    def create
        collection = Collection.create(collection_params)
        render json: collection
    end

    def newcollection
        artwork_1 = Artwork.find(order_params[:artwork_id])


        collection = Collection.create(user_id: collection_params[:user_id] )
        collection_items = OrderItem.create(collection_id: collection.id, artwork_id: collection_params[:artwork_id])
        user = User.find(collection_params[:user_id])
        user.update(current_collection: collection.id )
        collection_items = collection.collection_items
        collection.save

        render json: current_site_user, include: '**'
    end

    private
    def collection_params
        params.permit(:user_id, :artwork_id)
    end


end