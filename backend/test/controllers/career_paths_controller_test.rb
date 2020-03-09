require 'test_helper'

class CareerPathsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @career_path = career_paths(:one)
  end

  test "should get index" do
    get career_paths_url, as: :json
    assert_response :success
  end

  test "should create career_path" do
    assert_difference('CareerPath.count') do
      post career_paths_url, params: { career_path: { title: @career_path.title } }, as: :json
    end

    assert_response 201
  end

  test "should show career_path" do
    get career_path_url(@career_path), as: :json
    assert_response :success
  end

  test "should update career_path" do
    patch career_path_url(@career_path), params: { career_path: { title: @career_path.title } }, as: :json
    assert_response 200
  end

  test "should destroy career_path" do
    assert_difference('CareerPath.count', -1) do
      delete career_path_url(@career_path), as: :json
    end

    assert_response 204
  end
end
