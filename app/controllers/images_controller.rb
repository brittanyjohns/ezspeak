class ImagesController < ApplicationController
  before_action :set_image, only: %i[ show update destroy ]
  # include ImageSerializer
  # GET /images
  def index
    @images = Image.with_attached_saved_image.last(10)

    render json: @images
  end

  # GET /images/1
  def show
    render json: ImageSerializer.new(@image).serializable_hash[:data][:attributes]
  end

  # POST /images
  def create
    puts "image_params: #{image_params}"
    puts "PArams: #{params}"

    @image = Image.new(image_params)

    if @image.save
      render json: @image, status: :created, location: @image
    else
      render json: @image.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /images/1
  def update
    if @image.update(image_params)
      render json: @image
    else
      render json: @image.errors, status: :unprocessable_entity
    end
  end

  # DELETE /images/1
  def destroy
    @image.destroy!
  end

  private

  # Use callbacks to share common setup or constraints between actions.
  def set_image
    @image = Image.with_attached_saved_image.find(params[:id])
  end

  # Only allow a list of trusted parameters through.
  def image_params
    params.require(:image).permit(:label, :private, :saved_image, :category, :ai_generated, :ai_prompt)
  end
end
