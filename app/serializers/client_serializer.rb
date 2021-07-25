class ClientSerializer < ActiveModel::Serializer
  attributes :id, :name, :age, :email, :profession, :phone, :birthday
  has_one :user
end
