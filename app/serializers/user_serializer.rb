class UserSerializer < ActiveModel::Serializer
    attributes :id, :name, :email, :password_digest
    has_many :collections
    # has_many :artworks, through :collections
  end