class ArtworksController < ApplicationController

    def index
        @artworks = Artwork.all
        render json: @artworks, status: :ok
    end

    def show
        @artwork = Artwork.find_by(id: params[:id])
        render json: artwork
    end

    def create
        @artwork = Artwork.new(artwork_params)
        @artwork.save
        render json: @artwork, status: :created
    end

    def update
        if @artwork.update(artwork_params)
          render json: @artwork
        else
          render json: @artwork.errors, status: :unprocessable_entity
        end
    end

    def destroy
        @artwork= Artwork.where(id: params[:id]).first
        if @artwork.destroy
            head(:ok)
        else
            head(:unprocessable_entity)
        end
    end

    def new
        user = User.find_by(id: session[:user_id])
        artwork = user.artworks.new(artworks_params)
        if artwork.save
            render json: artwork, status: :created
        else
            render json: { error: "Not Created" }, status: :bad_request
        end 
    end

    private 

    def set_artwork
        @artwork = Artwork.find(params[:id])
    end

    def creation_params
        params.permit(:artwork)
    end
    
    def artwork_params
    params.require(:artwork).permit(:user_id, :title, :artist_title, :place_of_origin, :date_display, :medium_display, :image_id)
    end
end

#     def index 
#         artworks = Artwork.all 
#         render json: artworks
#     end

#     def show 
#         # byebug
#         artwork = Artwork.find(params[:id].to_i)
#         render json: artwork, include: "**" 
#     end
# end