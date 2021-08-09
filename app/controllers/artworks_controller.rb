class ArtworksController < ApplicationController

    def index
        artworks = Artwork.all
        render json: artworks
    end

    def show
        artwork = Artwork.find_by(id: params[:id])
        render json: artwork
    end

    def create
        artwork = Artwork.create!(
          title: params['artwork']['title'],
          artist_title: params['artwork']['artist_title'],
          place_of_origin: params['artwork']['place_of_origin'],
          date_display: params['artwork']['date_display'],
          medium_display: params['artwork']['medium_display'],
          image_id: params['artwork']['image_id']
        )
    
        if artwork
          session[:artwork_id] = artwork.id
          render json: {
            status: :created,
            artwork: artwork
          }
        else
          render json: { status: 500 }
        end
      end

    def update
        if artwork.update(artwork_params)
          render json: artwork
        else
          render json: artwork.errors, status: :unprocessable_entity
        end
    end

    def destroy
        artwork= Artwork.where(id: params[:id]).first
        if artwork.destroy
            head(:ok)
        else
            head(:unprocessable_entity)
        end
    end

    # def new
    #     user = User.find_by(id: session[:user_id])
    #     artwork = user.artworks.new(artworks_params)
    #     if artwork.save
    #         render json: artwork, status: :created
    #     else
    #         render json: { error: "Not Created" }, status: :bad_request
    #     end 
    # end

    private 

    def artwork_params
        params.require(:artwork).permit(:title, :artist_title, :place_of_origin, :date_display, :medium_display, :image_id)
    end
end