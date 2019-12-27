class LikedBook < ApplicationRecord
    validates :title, presence: true

    scope :read, -> { where(read: true) }
    scope :unread, -> { where(read: false) }
end
