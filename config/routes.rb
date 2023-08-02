Rails.application.routes.draw do
  get 'tasks/index'
  get 'tasks/show'
  get 'tasks/create'
  get 'tasks/update'
  get 'tasks/destroy'
  get 'task_lists/index'
  get 'task_lists/show'
  get 'task_lists/create'
  get 'task_lists/update'
  get 'task_lists/destroy'
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
  get '/hello', to: 'application#hello_world'
  
end
