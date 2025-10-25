Rails.application.routes.draw do
  # get 'inertia-example', to: 'inertia_example#index'
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Reveal health status on /up that returns 200 if the app boots with no exceptions, otherwise 500.
  # Can be used by load balancers and uptime monitors to verify that the app is live.
  get "up" => "rails/health#show", as: :rails_health_check

  # Render dynamic PWA files from app/views/pwa/* (remember to link manifest in application.html.erb)
  # get "manifest" => "rails/pwa#manifest", as: :pwa_manifest
  # get "service-worker" => "rails/pwa#service_worker", as: :pwa_service_worker

  # Defines the root path route ("/")
  root "home#index"

  get "blog", to: "blog#index"
  get "blog/:slug", to: "blog#show", as: :blog_post
  scope :admin, as: :admin do
    resources :blog_posts, param: :slug, controller: :blog_posts
    resources :tags, param: :slug, controller: :tags
  end
  get "contact", to: "contact#index"
  post "contact", to: "contact#message"
  get "about", to: "about#index"
end
