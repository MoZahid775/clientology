class ClientSerializer < ActiveModel::Serializer
  attributes :id, :name, :age, :email, :profession, :phone, :birthday
  belongs_to :user
  # has_many :notes


  # has_one :user
end
