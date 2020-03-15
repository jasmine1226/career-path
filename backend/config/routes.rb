Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      resources :courses
      resources :career_paths, only: [:index, :show, :new, :create, :destroy] do
        member do
          patch ':course_id' => "career_paths#update"
        end
      end
    end
  end

  #match ':career_paths/:id(/:course_id)' => "career_paths#update"
  
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
