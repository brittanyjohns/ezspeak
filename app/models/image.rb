class Image < ApplicationRecord
  has_one_attached :saved_image
  has_many :board_images
  has_many :boards, through: :board_images

  def image_url
    Rails.application.routes.url_helpers.url_for(saved_image) if saved_image.attached?
  end
end
