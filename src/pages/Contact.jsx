import React, { useRef,useState } from 'react';
import emailjs from '@emailjs/browser';




export default function Contact() {
  const form = useRef();
  const [email, setEmail] = useState('');
  const [userName, setUserName] = useState('');
  const [message, setMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

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
  const handleInputChange = (e)=>{
    const {target} = e;
    const inputType = target.name;
    const inputValue = target.value;

    if (inputType==='user_email'){
      setEmail(inputValue);
    } else if (inputType==='user_name'){
      setUserName(inputValue)
    } else {
      setMessage(inputValue)
    }


    if (inputValue.length ===0 ){
      setErrorMessage('Please enter a value to continue')
    }
    else{
      setErrorMessage('')
    }
  }


  return (
    <div >
      <h1>Contact</h1>
      <form ref={form} onSubmit={sendEmail}>
      <label>Name:</label>
      <input type="text"
        value={userName} 
        onChange={handleInputChange}
        name="user_name" />
      <label>Email Address:</label>
      <input 
        type="email" 
        value={email} 
        onChange={handleInputChange}
        name="user_email" />
      <label>Message:</label>
      <textarea 
      value={message} 
      onChange={handleInputChange}
      name="message" />
      <input className="submit-btn" type="submit" value="Send" />
    </form>
    {errorMessage && (
      <div>
        <p className="error-text">{errorMessage}</p>
      </div>
    )}
    </div>
  );
}
