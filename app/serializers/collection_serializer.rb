class CollectionSerializer < ActiveModel::Serializer
    attributes :id, :user_id, :artwork_id
    # has_many :products
    has_many :collection_items
  end