import React from "react";
import "../styles/ContactStyle.css";

const ContactForm = () => {
  return (
    <>
      <div className="container">
        <h1 className="heading">
          Contact <span className="headred">Me</span>
        </h1>
        <form
          className="contact"
          action="https://formspree.io/f/xyyqvglr"
          method="POST"
        >
          <center className="contact-head">Send Me a Message</center>
          <label className="label">Your Name:</label>
          <input
            type="text"
            id="userName"
            name="Username"
            required
            // value=""
            placeholder="Enter Your Name..."
          />

          <label>Your Email:</label>
          <input
            type="email"
            id="email"
            name="Email"
            required
            // value=""
            placeholder="Enter Your Email..."
          />

          <label>Your Message:</label>
          <textarea
            placeholder="Write a message..."
            name="Message"
            required
            // value=""
            id="message"
          />
          <button className="submit" type="submit">
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default ContactForm;
