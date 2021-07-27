class NoteSerializer < ActiveModel::Serializer
  attributes :id, :note, :client_id
  # has_one :client
end
