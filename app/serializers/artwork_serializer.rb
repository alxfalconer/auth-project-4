class ArtworkSerializer < ActiveModel::Serializer
    attributes :id, :user_id, :user, collection_id, :title, :artist_title, :place_of_origin, :date_display, :medium_display, :image_id

  end