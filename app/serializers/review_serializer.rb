class ReviewSerializer < ActiveModel::Serializer
    attributes :id, :body, :user_id
    # def user
    #     {user_id: self.object.user.id,
    #     user_name: self.object.user.name}
    # end
  end