class AlbumsController < ApplicationController

    def index
        @albums = Album.all
        render json: @albums, status: :ok
    end

    def show
        render json: @album
    end

    def create
        @album = Album.new(album_params)
        @album.save
        render json: @album, status: :created
    end

    def update
        if @album.update(album_params)
          render json: @album
        else
          render json: @album.errors, status: :unprocessable_entity
        end
    end

    def destroy
        @album = Album.where(id: params[:id]).first
        if @album.destroy
            head(:ok)
        else
            head(:unprocessable_entity)
        end
    end

    private 

    def set_album
        @album = Album.find(params[:id])
    end
    
    def album_params
    params.require(:album).permit(:title, :artist, :genre)
    end
end