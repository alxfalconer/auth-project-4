class CreateCollectionItems < ActiveRecord::Migration[5.2]
    def change
      create_table :collection_items do |t|
        t.integer :artwork_id
        t.integer :collection_id
  
        t.timestamps
      end
    end
  end