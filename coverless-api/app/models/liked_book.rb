class LikedBook < ApplicationRecord
    validates :title, presence: true
end
