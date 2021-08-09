class Collection < ApplicationRecord
    belongs_to :user, optional: true
    has_many :artworks
    accepts_nested_attributes_for :artworks

end