class ImageSerializer
  include JSONAPI::Serializer
  attributes :id, :label, :category, :private, :ai_generated, :ai_prompt, :saved_image, :created_at, :updated_at, :image_url
end
