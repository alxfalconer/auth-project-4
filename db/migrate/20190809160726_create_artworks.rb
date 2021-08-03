class CreateArtworks < ActiveRecord::Migration[5.2]
    def change
      create_table :artworks do |t|
        t.string :title
        t.integer :user_id
        t.string :artist_title
        t.string :place_of_origin
        t.string :date_display
        t.string :medium_display
        t.string :image_id
  
        t.timestamps
      end
    end
  end