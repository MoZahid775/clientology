class ProfileSerializer < ActiveModel::Serializer
  attributes :id, :suit_size, :pant_size, :style, :shirt_size, :height, :shoe_size, :client_id
  # has_one :client
end
