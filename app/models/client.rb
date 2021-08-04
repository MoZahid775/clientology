class Client < ApplicationRecord
  belongs_to :user
  has_many :notes, dependent: :destroy
  has_many :purchases, dependent: :destroy
end
