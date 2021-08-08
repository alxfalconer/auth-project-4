class Collection < ApplicationRecord
    # belongs_to :user
    belongs_to :user, optional: true
    has_many :artworks
    # has_many :collection_items
    # has_many :artworks, through: :collection_items

end