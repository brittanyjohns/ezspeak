class Image < ApplicationRecord
  has_one_attached :saved_image
  has_many :board_images
  has_many :boards, through: :board_images
end
