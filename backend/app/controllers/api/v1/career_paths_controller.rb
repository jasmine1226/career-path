module Api::V1
  class CareerPathsController < ApplicationController
    before_action :set_career_path, only: [:show, :update, :destroy]

    # GET /career_paths
    def index
      @career_paths = CareerPath.all
      
      render json: @career_paths.to_json(:include => {
        :courses => {:only => [:title, :url, :length]}})
    end

    # GET /career_paths/1
    def show
    
      render json: CareerPathSerializer.to_json(:include => {
        :courses => {:only => [:title, :url, :length]}})
    end

    # POST /career_paths
    def create
      @career_path = CareerPath.new(career_path_params)

      if @career_path.save
        render json: @career_path.to_json(:include => {
          :courses => {:only => [:title, :url, :length]}}), status: :created
      else
        render json: @career_path.errors, status: :unprocessable_entity
      end
    end

    # PATCH/PUT /career_paths/1/course_id
    def update
      if params[:course_id]
        course = Course.find(params[:course_id])
        @career_path.courses.push(course)
        render json: @career_path.to_json(:include => {
          :courses => {:only => [:title, :url, :length]}}), status: 200
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
        params.require(:career_path).permit(:id, :title, :created_at, :updated_at, :course_id)
      end
  end
end