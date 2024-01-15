Rails.application.routes.draw do
  get 'static_pages/home'
  root to: "static_pages#home"
  post '/chatbot/generate_response', to: 'chatbot#generate_response'
end