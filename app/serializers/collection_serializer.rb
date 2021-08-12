class CollectionSerializer < ActiveModel::Serializer
    attributes :id, :user_id
    # :user

    # belongs_to :user
    # has_many :artworks
  end