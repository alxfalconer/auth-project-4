class CreateReviews < ActiveRecord::Migration[6.1]
  def change
    create_table :reviews do |t|
      # t.references :user, null: false, foreign_key: true
      t.text :body
      # t.string :user
      # t.integer :user_id
      # t.string :album

      t.timestamps
    end
  end
end
