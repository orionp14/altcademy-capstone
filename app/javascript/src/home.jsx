// home.jsx
import React from 'react';
import ReactDOM from 'react-dom';
import './home.scss';

const Home = () => (
  <section className="">
    <div className="container-fluid">
      <div className="row">
        <div className="col-lg-6 vh-100 bg-primary">
        </div>
        <div className="col-lg-6 vh-100 chat-container">
          <h1>ChatGPT</h1>
          <section className="chat-conversation"></section>
          <form className="chat-input">
            <div className="input-group">
              <textarea className="form-control" id="prompt" placeholder="Type your message..."></textarea>
              <button type="submit" className="btn btn-primary">Send</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
);

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(<Home />, document.body.appendChild(document.createElement('div')));
});
