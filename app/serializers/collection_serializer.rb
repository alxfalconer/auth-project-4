class CollectionSerializer < ActiveModel::Serializer
    attributes :id, :user_id
    # has_many :artworks
    # has_many :products
    # has_many :collection_items
  end