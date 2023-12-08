class Board < ApplicationRecord
  has_many :board_images
  has_many :images, through: :board_images
end
