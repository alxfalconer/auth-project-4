class User < ApplicationRecord
    # has_secure_password
    validates :email, presence: true
    has_many :reviews, :dependent => :destroy
    has_many :albums
end
