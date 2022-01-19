class User < ApplicationRecord
    has_secure_password
    validates_presence_of :email
    validates_uniqueness_of :email
    has_many :collections
    has_many :artworks
    # has_many :artworks, through: :collections

  
end