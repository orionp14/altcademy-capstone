class ChatController < ApplicationController
  protect_from_forgery with: :null_session

  def generate_response
    user_message = params[:user_message]
    id = params[:id]

    api_url = "https://api.openai.com/v1/chat/completions"
    openai_response = send_openai_request(user_message)

    if openai_response.present?
      parsed_response = JSON.parse(openai_response)
      incoming_message = parsed_response['choices'][0]['message']['content'].to_s.strip

      render json: { success: true, incoming_message: incoming_message, id: id }
    else
      render json: { success: false, error: 'Error fetching response from OpenAI' }, status: :unprocessable_entity
    end
  end

  private

  def send_openai_request(user_message)
    uri = URI("https://api.openai.com/v1/chat/completions")
    request = Net::HTTP::Post.new(uri)
    request.content_type = "application/json"
    request["Authorization"] = "Bearer #{ENV['OPENAI_API_KEY']}"

    request.body = {
      model: "gpt-3.5-turbo",
      messages: [
        { role: "system", content: "You are a medical professional providing a short diagnosis and suggesting ways to alleviate symptoms. Only answer questions that relate to medical advice." },
        { role: "user", content: user_message }
      ]
    }.to_json

    http = Net::HTTP.new(uri.host, uri.port)
    http.use_ssl = true

    response = http.request(request)
    response.body
  end
end