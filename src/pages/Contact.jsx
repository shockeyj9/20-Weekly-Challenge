import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
// require('dotenv').config()

export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_fxzkqhh', 'template_gfeh089', form.current, 'JUHzFOD8ULmdU8HTk')
      .then((result) => {
          console.log(result.text);
          e.target.reset();
      }, (error) => {
          console.log(error.text);
      });
  };


  return (
    <div>
      <h1>Contact</h1>
      <form ref={form} onSubmit={sendEmail}>
      <label>Name:</label>
      <input type="text" name="user_name" />
      <label>Email Address:</label>
      <input type="email" name="user_email" />
      <label>Message:</label>
      <textarea name="message" />
      <input type="submit" value="Send" />
    </form>
    </div>
  );
}
