Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      resources :courses
      resources :career_paths, only: [:index, :show, :new, :update, :create, :destroy] do
          collection do
            patch ':id/courses/:course_id', action: :add_course
            delete ':id/courses/:course_id', action: :delete_course
          end
      end
    end
  end

  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
