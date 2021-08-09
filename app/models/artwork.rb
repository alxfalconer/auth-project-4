class Artwork < ApplicationRecord
    belongs_to :collection, optional: true
end