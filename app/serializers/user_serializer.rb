class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :name, :age, :email, :password_digest
end
