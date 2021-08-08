class CreateCollections < ActiveRecord::Migration[5.2]
    def change
      create_table :collections do |t|
        t.integer :user_id
        t.belongs_to :user, null: false, foreign_key: true
  
        t.timestamps
      end
    end
  end