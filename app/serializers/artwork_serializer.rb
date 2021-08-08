class ArtworkSerializer < ActiveModel::Serializer
    attributes :id, :collection_id, :title, :artist_title, :place_of_origin, :date_display, :medium_display, :image_id
  end