class CreateCollections < ActiveRecord::Migration[5.2]
    def change
      create_table :collections do |t|
        t.integer :user_id
        t.string :collection_name
  
        t.timestamps
      end
    end
  end