require "test_helper"

class ImagesControllerTest < ActionDispatch::IntegrationTest
  setup do
    @image = images(:one)
  end

  test "should get index" do
    get images_url, as: :json
    assert_response :success
  end

  test "should create image" do
    assert_difference("Image.count") do
      post images_url, params: { image: { ai_generated: @image.ai_generated, ai_prompt: @image.ai_prompt, category: @image.category, label: @image.label, private: @image.private } }, as: :json
    end

    assert_response :created
  end

  test "should show image" do
    get image_url(@image), as: :json
    assert_response :success
  end

  test "should update image" do
    patch image_url(@image), params: { image: { ai_generated: @image.ai_generated, ai_prompt: @image.ai_prompt, category: @image.category, label: @image.label, private: @image.private } }, as: :json
    assert_response :success
  end

  test "should destroy image" do
    assert_difference("Image.count", -1) do
      delete image_url(@image), as: :json
    end

    assert_response :no_content
  end
end
