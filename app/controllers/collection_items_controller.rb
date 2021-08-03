class CollectionItemsController < ApplicationController
    def create
        collection = Collection.find(collection_item_params[:collection_id])
        collection_items = collection.collection_items

        found_item = collection_items.detect do |item| 
            collection_item_params[:artwork_id] == item.artwork_id
        end
        if found_item
            found_item.save
            
        else
            collectionItem = CollectionItem.create(collection_item_params)
            collectionItem.save
            # order.total_price += orderItem.item_price
            # order.save
        end

        collection = Collection.find(collection_item_params[:collection_id])
        collection.save
        
        # byebug
        # render json: order, include: "**"
        render json: current_site_user, include: '**'

    end

    def destroy
        collection_item = CollectionItem.find(params[:id].to_i)
        collection_item.destroy

        collection.save
        # render json: {user: current_site_user, order: order}
        render json: current_site_user, include: '**'

    end

    private
    def collection_item_params
        params.permit(:artwork_id, :collection_id)
    end
end