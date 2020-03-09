class CareerPathsController < ApplicationController
  before_action :set_career_path, only: [:show, :update, :destroy]

  # GET /career_paths
  def index
    @career_paths = CareerPath.all

    render json: @career_paths
  end

  # GET /career_paths/1
  def show
    render json: @career_path
  end

  # POST /career_paths
  def create
    @career_path = CareerPath.new(career_path_params)

    if @career_path.save
      render json: @career_path, status: :created, location: @career_path
    else
      render json: @career_path.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /career_paths/1
  def update
    if @career_path.update(career_path_params)
      render json: @career_path
    else
      render json: @career_path.errors, status: :unprocessable_entity
    end
  end

  # DELETE /career_paths/1
  def destroy
    @career_path.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_career_path
      @career_path = CareerPath.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def career_path_params
      params.require(:career_path).permit(:title)
    end
end
