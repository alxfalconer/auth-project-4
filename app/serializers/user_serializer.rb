class UserSerializer < ActiveModel::Serializer
    attributes :id, :name, :email, :password_digest, :current_collection
    has_one :collection
    # has_many :artworks, through :collections
  end