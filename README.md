Medibot:

-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

Product Image:

![medibot2](https://github.com/orionp14/altcademy-capstone/assets/111712275/1595859d-5333-40bf-883d-39d9dea5e32a)

-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

Technologies Used:

-React: Employed for frontend development, React facilitates building the chatbot interface by allowing the creation of reusable UI components and efficient state management.

-Rails: Utilized for backend development, Rails provides the necessary structure and tools to handle HTTP requests and responses.

-OpenAI API: Integrated into the backend, the Rails controller communicates with the OpenAI API to generate chatbot responses based on user messages.

-CSS Modules: The code utilizes CSS Modules to style React components. CSS Modules allow local scoping of CSS classes, preventing styles from conflicting with each other.

-Responsive Design: The code includes logic to make the UI responsive, adapting the layout and behavior based on the device's screen size.

-Net::HTTP Library: In the Rails controller, the Net::HTTP library constructs and sends requests to the OpenAI API to fetch chatbot responses.

-Environment Variables: Security best practices are followed by storing sensitive information like the OpenAI API key in environment variables, keeping specific data out of the codebase.

-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

General Approach:


  My approach was centered on creating a responsive and user-friendly chatbot interface, seamlessly integrating React and Rails technologies. Leveraging React's component-based structure, 
I organized the UI into reusable components such as the chatbot and the survey questions, ensuring scalability and easy maintenance. For efficient state management and handling side effects,
I utilized React's useState and useEffect hooks, enabling tasks such as scrolling to the latest message and inputting predefined questions by activating a button.

  User interaction was prioritized, with intuitive event handling functions guiding users through the conversation flow, whether selecting predefined categories or inputting custom messages. 
To guarantee a seamless user experience, we utilized CSS Modules for modular styling, preventing style conflicts within the application, and ensuring consistency across different screen sizes. 
Additionally, our chatbot interface dynamically adjusted its layout and behavior based on window resizing, enhancing responsiveness through JavaScript.

  On the backend, Rails played a crucial role in interacting with external APIs like the OpenAI API to fetch responses based on user input. My comprehensive approach covered both frontend 
and backend development. React facilitated the creation of a responsive chatbot interface with reusable components and efficient state management, while Rails handled backend tasks seamlessly.
Asynchronous operations were managed using modern JavaScript features like async/await and the fetch API, enabling streamlined communication between frontend and backend,
ensuring prompt responses to user queries while gracefully managing errors.

  In summary, my approach synergistically combined the strengths of React and Rails to deliver a robust and user-friendly chatbot interface. By prioritizing responsiveness, modularity, and 
efficient communication between frontend and backend components, I crafted an intuitive platform that enables users to effortlessly interact with and access medical information. 
This holistic approach ensures a seamless user experience and sets the foundation for further enhancements and scalability in the future.

-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

Dependencies:

ruby-openai: https://rubygems.org/gems/ruby-openai

dotenv-rails: https://rubygems.org/gems/dotenv-rails/versions/2.1.1?locale=en

httparty: https://rubygems.org/gems/httparty/versions/0.13.7?locale=en

-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

User Stories: 

My motivation behind developing this application stemmed from a desire to assist individuals who are grappling with various health issues and symptoms. Recognizing the challenges that come 
with trying to determine medical concerns, I aimed to create a supportive platform that prioritizes alleviating symptoms and offering guidance. With this intention in mind, I designed the 
chatbot interface to be user-centric, focusing on providing relief and support rather than attempting to diagnose specific illnesses or injuries. This approach reflects a commitment to 
empowering users to manage their symptoms effectively while encouraging them to seek professional medical advice when necessary. By concentrating on symptom alleviation, the chatbot serves 
as a virtual companion for users during times of discomfort and uncertainty. It offers a safe space for users to express their concerns, receive tailored recommendations, and access resources
to help them cope with their symptoms. Furthermore, the emphasis on symptom management underscores the application's dedication to promoting holistic well-being and self-care practices. 
Rather than overwhelming users with medical terminology or complex diagnoses, the chatbot delivers practical advice and empathetic support, fostering a sense of empowerment and resilience.

-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

Wireframes:

Before:
![0e1c50c0-244b-44f7-ab43-bbc40a5e0d02](https://github.com/orionp14/altcademy-capstone/assets/111712275/b807ca12-49f7-4d5d-9078-eb4c2614d2c4)

After:
![6f1fba74-094c-4a65-8821-fec017271f0f](https://github.com/orionp14/altcademy-capstone/assets/111712275/910eee86-ba4b-4c8d-a184-5a8da11b8d46)

-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

Demo video: 

https://www.loom.com/share/b2f197de559746bc891cb9131ebdcde3?sid=1b91d8d7-50bc-4716-acec-7c6fa02e52de

-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

Unsolved Issues: 

The sole issue I encountered, which remains unresolved, arises when the application is viewed in mobile size. Upon resizing the app to mobile dimensions, the survey questions unexpectedly
surface at the top. Originally, my intention was to keep them hidden and reveal them only upon user interaction with a designated button. However, I encountered difficulty in reversing the 
toggle order for this functionality. Consequently, I opted to slightly modify the header button to give the impression that the buttons were intended to be visible from the outset. I suspect 
the problem lies in an inconsistency within the useEffect responsible for adjusting the layout according to screen size. 

-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
