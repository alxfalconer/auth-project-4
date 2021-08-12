class ArtworkSerializer < ActiveModel::Serializer
    attributes :id, :user_id, :title, :artist_title, :place_of_origin, :date_display, :medium_display, :image_id

    belongs_to :collection


  end