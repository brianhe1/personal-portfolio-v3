import React, { useRef }  from 'react'
import emailjs from "emailjs-com";
import './contact.css'

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_umqxnju",
        "template_2w19bmi",
        form.current,
        "FgfDtf916tYxbYwQ-"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    e.target.reset();
  };

  return (
    <section id='contact'>
      <div className="container contact-container">
        <h2>let's talk!</h2>
        <h5>Please reach out if you have any questions, suggestions, or simply want to say hello!</h5>
        <form ref={form} /* line 6*/ onSubmit={sendEmail}>
          <div class="name-and-email">
            <div class="name-form-group">
              <label for="name">Your Name</label>
              <input
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  required
              />
            </div>
            <div class="email-form-group">
              <label for="email">Your email address</label>
              <input
                  type="email"
                  name="email"
                  placeholder="Enter your email address"
                  required
              />
            </div>
          </div>
          <div class="message-group">
            <label for="message">Your Message</label>
            <textarea
              name="message"
              id="message"
              placeholder= "Hello! I really like your portfolio. I would like to schedule a meeting to chat about potential collaboration opportunities. What's the best time for us to connect  and discuss?"
              required
            ></textarea>
            <button type="submit" className="message-btn">
              Send Message 
            </button>
          </div>
        </form>
      </div>
    </section>
  )
}

export default Contact