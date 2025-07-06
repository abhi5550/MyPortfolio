import React, { useRef } from 'react';
import emailjs from 'emailjs-com';

import './contact.css'
import { MdOutlineEmail } from 'react-icons/md'
import { RiMessengerLine } from 'react-icons/ri'
import { BsWhatsapp } from 'react-icons/bs'


const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
  
    emailjs.sendForm('service_hbg505p', 'template_pa8ihxk', form.current, 'N_U_8i_6rNg70LJ9x')
      .then((result) => {
        console.log('Message Sent: ', result.text); // Log successful message send
      })
      .catch((error) => {
        console.error('Error sending message: ', error); // Properly log the error
        alert('There was an issue sending the message. Please try again later.');
      });
      
    e.target.reset(); // Reset form after submission
  };

  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact_container">
        <div className="contact_options">
          {/* Email Option */}
          <article className="contact_option">
            <MdOutlineEmail className="contact_option-icon" />
            <h4>Email</h4>
            <h5>abhisonakpuriya@gmail.com</h5>
           <a href="https://mail.google.com/mail/?view=cm&fs=1&to=abhisonakpuriya@gmail.com" target="_blank" rel="noopener noreferrer">
           Send a message
          </a>
          </article>

          {/* Messenger Option */}
          <article className="contact_option">
            <RiMessengerLine className="contact_option-icon" />
            <h4>Messenger</h4>
            <h5>Abhinav Sonakpuriya</h5>
            <a href="https://m.me/abhi5550" target="_blank" rel="noopener noreferrer">
              Send a message
            </a>
          </article>

          {/* WhatsApp Option */}
          <article className="contact_option">
            <BsWhatsapp className="contact_option-icon" />
            <h4>WhatsApp</h4>
            <h5>+91 9108557765</h5>
            <a href="https://wa.me/919108557765" target="_blank" rel="noopener noreferrer">
              Send a message
            </a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder="Your Full Name" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea
            name="message"
            cols="30"
            rows="7"
            placeholder="Your Message"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>

      </div>
    </section>
  )
}

export default Contact