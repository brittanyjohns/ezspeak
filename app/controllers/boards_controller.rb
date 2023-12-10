class BoardsController < ApplicationController
  before_action :set_board, only: %i[ show update destroy ]

  # GET /boards
  def index
    @boards = Board.all
    @boards_with_images = @boards.map do |board|
      {
        id: board.id,
        name: board.name,
        static: board.static,
        favorite: board.favorite,
        user_id: board.user_id,
        images: board.images.map do |image|
          puts "image: #{image.inspect}"
          {
            id: image.id,
            label: image.label,
            category: image.category,
            url: "",
            private: image.private,
            ai_generated: image.ai_generated,
            saved_image: image.saved_image,
          }
        end,
      }
    end

    render json: @boards_with_images
  end

  # GET /boards/1
  def show
    @board = Board.includes(board_images: { image: [saved_image_attachment: :blob] }).find(params[:id])
    payload = {
      id: @board.id,
      name: @board.name,
      static: @board.static,
      favorite: @board.favorite,
      user_id: @board.user_id,
      images: @board.images.map do |image|
        {
          id: image.id,
          label: image.label,
          category: image.category,
          url: "",
          private: image.private,
          ai_generated: image.ai_generated,
        }
      end,
    }
    render json: payload
  end

  def add_word_list
    @board = Board.find(params[:id])
    words = params[:word_list]
    words.each do |word|
      image = Image.find_or_create_by(label: word)
      BoardImage.create(board: @board, image: image)
    end
    render json: @board
  end

  # POST /boards
  def create
    @board = Board.new(board_params)

    if @board.save
      render json: @board, status: :created, location: @board
    else
      render json: @board.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /boards/1
  def update
    if @board.update(board_params)
      render json: @board
    else
      render json: @board.errors, status: :unprocessable_entity
    end
  end

  # DELETE /boards/1
  def destroy
    @board.destroy!
  end

  private

  # Use callbacks to share common setup or constraints between actions.
  def set_board
    @board = Board.includes(:images).find(params[:id])
  end

  # Only allow a list of trusted parameters through.
  def board_params
    params.require(:board).permit(:name, :static, :user_id, :favorite)
  end
end
