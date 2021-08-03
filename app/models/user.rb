class User < ApplicationRecord
    has_secure_password
    validates_presence_of :email
    validates_uniqueness_of :email
    has_many :artworks
    # has_many :collection_items
    # has_many :reviews, :dependent => :destroy
    # has_many :albums
end
