import React, { useState, useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import './home.scss';

const Home = () => {
  const [userMessage, setUserMessage] = useState('');
  const [inputHeight, setInputHeight] = useState('auto');
  const [messages, setMessages] = useState([
    { content: "Welcome! How can I assist you today?", direction: 'incoming', id: Date.now() },
  ]);
  const [messageId, setMessageId] = useState(1);
  const [dynamicOptions, setDynamicOptions] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [buttonSelected, setButtonSelected] = useState(false);
  const messagesContainerRef = useRef(null);
  const inputInitHeight = 50;

  useEffect(() => {
    setInputHeight(`${inputInitHeight}px`);
  }, []);

  useEffect(() => {
    if (messagesContainerRef.current) {
      messagesContainerRef.current.scrollTop = messagesContainerRef.current.scrollHeight;
    }
  }, [messages]);

  const createChatLi = (message, className, id) => (
    <li key={`${id}-${className}`} className={`chat ${className}`}>
      {className === 'outgoing' ? <p>{message}</p> : <><span className="material-symbols-outlined">smart_toy</span><p>{message}</p></>}
    </li>
  );

  const generateResponse = async (id, userMessage) => {
    const API_URL = "/generate_response";

    try {
      const response = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id,
          user_message: userMessage,
        }),
      });

      const data = await response.json();

      if (data.success) {
        setMessages((prevMessages) => [
          ...prevMessages.filter((msg) => msg.id !== id),
          { content: userMessage, direction: 'outgoing', id },
          { content: data.incoming_message, direction: 'incoming', id },
        ]);
      } else {
        console.error("Error fetching data:", data.error);
        const errorMessage = "Oops! Something went wrong. Please try again.";
        setMessages((prevMessages) => [
          ...prevMessages,
          { content: errorMessage, direction: "incoming", id },
        ]);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
      const errorMessage = "Oops! Something went wrong. Please try again.";
      setMessages((prevMessages) => [
        ...prevMessages,
        { content: errorMessage, direction: "incoming", id },
      ]);
    }
  };

  const handleEnterKeyPress = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault(); 
      handleChat();
    }
  };

  const handleChat = async () => {
    if (!userMessage.trim()) return;
  
    const messageId = Date.now();
  
    setMessages((prevMessages) => [
      ...prevMessages,
      { content: userMessage, direction: "outgoing", id: messageId },
      { content: "Thinking...", direction: "incoming", id: messageId },
    ]);
  
    setUserMessage('');
  
    try {
      await generateResponse(messageId, userMessage);
    } catch (error) {
      console.error("Error fetching data:", error);
      const errorMessage = "Oops! Something went wrong. Please try again.";
      setMessages((prevMessages) => [
        ...prevMessages,
        { content: errorMessage, direction: "incoming", id: messageId },
      ]);
    }
  };

  const predefinedMessages = [
    { label: 'Sickness', options: ['Cold', 'Fever', 'Nausea', 'Other'] },
    { label: 'Injury', options: ['Fracture', 'Sprain', 'Cut', 'Other'] },
    { label: 'Allergies', options: ['Pollen', 'Dust', 'Food', 'Other'] },
    { label: 'Other', options: ['Migraine', 'Fatigue', 'Sleep', 'Other'] },
  ];
  
  const sentenceMapping = {
    'Cold': 'I am currently experiencing symptoms of a cold, such as a runny nose and congestion.',
    'Fever': 'I am running a fever and feeling unwell.',
    'Nausea': 'I suspect I have a stomach bug, as I am experiencing nausea and abdominal discomfort.',
    'Fracture': 'I believe I may have a broken bone, and I am experiencing pain and difficulty moving the affected area.',
    'Sprain': 'I have a sprain, and the affected area is swollen and painful when I try to move it.',
    'Cut': 'I have a cut, and it may need attention as it is bleeding and causing discomfort.',
    'Pollen': 'I am allergic to pollen, and I am experiencing symptoms like sneezing, itching, and watery eyes.',
    'Dust': 'I have an allergy to dust, and I am experiencing symptoms like coughing and difficulty breathing.',
    'Food': 'I have allergies to certain foods, and I am experiencing symptoms like itching, swelling, or digestive issues.',
    'Migraine': 'I am having a migraine with symptoms like a throbbing headache and sensitivity to light.',
    'Fatigue': 'I am feeling extreme fatigue and low energy levels.',
    'Sleep': 'I am having trouble sleeping and suspect I may have a sleep disorder.',
    'Other': 'I have a different medical concern that is not related to any of the options.',
  };
  
  const handleButtonClick = (button) => {
    if (button.options) {
      setDynamicOptions(button.options);
      setSelectedCategory(button.label);
      setButtonSelected(true);
    } else {
      const selectedOption = button.label;
      const mappedSentence = sentenceMapping[selectedOption] || selectedOption;
  
      const messageId = Date.now();
  
      setMessages((prevMessages) => [
        ...prevMessages,
        { content: mappedSentence, direction: "outgoing", id: messageId },
        { content: "Thinking...", direction: "incoming", id: messageId },
      ]);
  
      setUserMessage('');
  
      setTimeout(() => {
        generateResponse(messageId, mappedSentence);
      }, 600);
  
      setDynamicOptions([]);
      setSelectedCategory(null);
      setButtonSelected(false);
    }
  };

  const getQuestionText = () => {
    if (selectedCategory === 'Other') {
      return 'Please describe the medical concern you are experiencing.';
    } else if (selectedCategory) {
      return `What ${selectedCategory.toLowerCase()} are you experiencing?`;
    } else {
      return 'What symptoms are you experiencing?';
    }
  };
  
  return (
    <section className="">
      <header>
        <h2>MediBot</h2>
      </header>
      <div className="container-fluid g-0">
        <div className="row g-0">
          <div className="col-lg-8 order-1 order-lg-2">
            <div className="chatbot">
              <div className="chatbot-content">
                <div className="chat-container" ref={messagesContainerRef}>
                  <ul className="chatbox">
                    {messages.map((message) => (
                      createChatLi(message.content, message.direction, message.id)
                    ))}
                  </ul>
                </div>
                <div className="chat-input">
                  <textarea
                    value={userMessage}
                    placeholder="Enter a message..."
                    spellCheck={false}
                    style={{ height: inputHeight }}
                    onChange={(e) => setUserMessage(e.target.value)}
                    onKeyDown={handleEnterKeyPress}
                    required
                  ></textarea>
                  <span id="send-btn" className="material-symbols-rounded" onClick={handleChat}>
                    send
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 order-2 order-lg-1 logo-panel d-flex flex-column align-items-center justify-content-center">
            <div className="white-background-container vh-100 d-flex flex-column">
              <div className="disclaimer d-flex flex-column align-items-center justify-content-center mt-auto">
                <div className="logo-container mb-2 d-flex align-items-center">
                  <div className='circle fs-lg-3 fs-md-2' style={{ marginRight: '1rem', fontSize: '2rem' }}>
                    <span className="material-symbols-outlined main-logo">smart_toy</span>
                  </div>
                </div>
                <div className="text-container text-center">
                  <p className="disclaimer-title mb-1">Welcome to MediBot!</p>
                  <p className="disclaimer-text mb-0 fs-md">
                    I'm here to help identify your medical issue and guide you on managing symptoms. Note, this isn't a substitute for professional advice.
                  </p>
                </div>
              </div>
              <hr className="divider" />
              <div className="button-panel text-center mb-auto">
                <p className="question-text">{getQuestionText()}</p>
                <div className='button-row'>
                  {selectedCategory ? (
                    dynamicOptions.map((option) => (
                      <div key={option} className="mb-1">
                        <button
                          className="action-button btn btn-outline-primary w-100"
                          onClick={() => handleButtonClick({ label: option })}
                        >
                          {option}
                        </button>
                      </div>
                    ))
                  ) : (
                    predefinedMessages.map((button) => (
                      <div key={button.label} className="mb-1">
                        <button
                          className="action-button btn btn-outline-primary w-100"
                          onClick={() => handleButtonClick(button)}
                        >
                          {button.label}
                        </button>
                      </div>
                    ))
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(<Home />, document.body.appendChild(document.createElement('div')));
});
