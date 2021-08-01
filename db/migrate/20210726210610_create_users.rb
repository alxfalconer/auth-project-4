class CreateUsers < ActiveRecord::Migration[6.1]
  def change
    create_table :users do |t|
      t.string :name
      t.string :email

      t.timestamps
    end
  end
end


# class CreateUsers < ActiveRecord::Migration[6.1]
#   def change
#     create_table :users do |t|
#       t.string :email
#       t.string :name
#       t.string :password

#       t.timestamps
#     end
#   end
# end