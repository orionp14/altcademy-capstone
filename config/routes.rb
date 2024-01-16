Rails.application.routes.draw do
  root to: "static_pages#home"
  post '/generate_response', to: 'chat#generate_response'
end