class CollectionItemSerializer < ActiveModel::Serializer
    attributes :id, :artwork_id, :collection_id
    belongs_to :artwork
    belongs_to :user
  end