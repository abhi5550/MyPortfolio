// src/components/Contact.jsx
import React, { useRef, useEffect, useState } from 'react';
import emailjs from '@emailjs/browser'; // <-- use this package
import './contact.css';
import { MdOutlineEmail } from 'react-icons/md';
import { RiMessengerLine } from 'react-icons/ri';
import { BsWhatsapp } from 'react-icons/bs';

const SERVICE_ID = 'service_hbg505p';
const TEMPLATE_ID = 'template_pa8ihxk';
const PUBLIC_KEY = 'N_U_8i_6rNg70LJ9x';

const Contact = () => {
  const form = useRef(null);
  const [sending, setSending] = useState(false);

  // init once
  useEffect(() => {
    try {
      emailjs.init?.({ publicKey: PUBLIC_KEY }); // v4 style works if available
      // fallback for older versions (safe to call even if init already ran)
      if (!emailjs.init) {
        // no-op
      }
    } catch (err) {
      console.warn('EmailJS init failed:', err);
    }
  }, []);

  const sendEmail = async (e) => {
    e.preventDefault();
    if (!form.current) return alert('Form not ready');

    setSending(true);
    try {
      const res = await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current);
      console.log('EmailJS success response:', res); // inspect res.status / res.text
      alert('Message sent successfully ✅');
      form.current.reset();
    } catch (err) {
      // Detailed logging to paste here if you need help
      console.error('EmailJS send error (object):', err);
      try {
        // some errors are plain objects with useful fields
        console.error('EmailJS send error (stringified):', JSON.stringify(err, null, 2));
      } catch (e) {}
      alert('There was an issue sending the message. Check console/network tab for details.');
    } finally {
      setSending(false);
    }
  };

  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact_container">
        <div className="contact_options">
          <article className="contact_option">
            <MdOutlineEmail className="contact_option-icon" />
            <h4>Email</h4>
            <h5>abhisonakpuriya@gmail.com</h5>
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=abhisonakpuriya@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Send a message
            </a>
          </article>

          <article className="contact_option">
            <RiMessengerLine className="contact_option-icon" />
            <h4>Messenger</h4>
            <h5>Abhinav Sonakpuriya</h5>
            <a href="https://m.me/abhi5550" target="_blank" rel="noopener noreferrer">
              Send a message
            </a>
          </article>

          <article className="contact_option">
            <BsWhatsapp className="contact_option-icon" />
            <h4>WhatsApp</h4>
            <h5>+91 9108557765</h5>
            <a href="https://wa.me/919108557765" target="_blank" rel="noopener noreferrer">
              Send a message
            </a>
          </article>
        </div>

        {/* NOTE: IMPORTANT -> name attributes must match your EmailJS template fields */}
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="user_name" placeholder="Your Full Name" required />
          <input type="email" name="user_email" placeholder="Your Email" required />
          <textarea name="message" cols="30" rows="7" placeholder="Your Message" required></textarea>
          <button type="submit" className="btn btn-primary" disabled={sending}>
            {sending ? 'Sending...' : 'Send Message'}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
