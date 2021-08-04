class Artwork < ApplicationRecord
    # belongs_to :user
    has_many :collection_items
    has_many :collections, through: :collection_items
    belongs_to :user, optional: true
end