class User < ApplicationRecord
    has_many :clients
    has_secure_password
    has_many :notes, through: :clients
    has_many :purchases, through: :clients
    has_many :profiles, through: :clients
    
    validates :username, uniqueness: {case_sensitive: false}
    validates :password, length: {in: 5..10}
end
