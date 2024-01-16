require "test_helper"

class ChatControllerTest < ActionDispatch::IntegrationTest
  test "should get generate_response" do
    get chat_generate_response_url
    assert_response :success
  end
end
