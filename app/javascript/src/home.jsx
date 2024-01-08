// home.jsx
import React from 'react';
import ReactDOM from 'react-dom';
import './home.scss';

const Home = () => (
<section className="">
  <header>
    <h2>Chatbot</h2>
  </header>
  <div className="container-fluid g-0">
    <div className="row g-0">
      <div className="col-lg-6 logo-panel d-flex flex-column align-items-center justify-content-center">
        <div className='circle mb-3'>
          <span className="material-symbols-outlined main-logo">smart_toy</span>
        </div>
        <p className="text-center mb-4 disclaimer">
            <span className="disclaimer-title">Welcome to our AI Medical Chatbot!</span>
            <br />
            We're here to help you determine your illness and provide guidance on combating symptoms.
            <br />
            Please note that this is not a substitute for professional medical advice.
          </p>
        <div className="button-panel justify-content-center">
          <button className="action-button btn btn-outline-primary w-100">Sickness</button>
          <button className="action-button btn btn-outline-primary w-100">Injury</button>
          <button className="action-button btn btn-outline-primary w-100">Allergies</button>
          <button className="action-button btn btn-outline-primary w-100">Other</button>
        </div>
      </div>
      <div className="col-lg-6">
        <div className="chatbot">
          <div className="chatbot-content">
            <ul className="chatbox">
              <li className="chat incoming">
                <span className="material-symbols-outlined">smart_toy</span>
                <p>Hi there 👋<br/>How can I help you today?</p>
              </li>
              <li className="chat outgoing">
                <p>I have a medical question. I am not feeling well.</p>
              </li>
            </ul>
            <div className="chat-input">
              <textarea placeholder="Enter a message..." spellCheck={false} required></textarea>
              <span id="send-btn" className="material-symbols-rounded">send</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
);

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(<Home />, document.body.appendChild(document.createElement('div')));
});
