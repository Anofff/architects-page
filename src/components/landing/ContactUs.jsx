import React from 'react';
import './ContactUs.css';   
import contactImg from '../../assets/landing/contact-us.png'; 
const ContactUs = () => {
  return (
    <section className="contact-section" id="contact">
      <h2 className="contact-title">Contact Us</h2>
      <div className="contact-content">
        {/* Contact Form */}
        <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
          <input type="text" placeholder="Name" />
          <input type="tel" placeholder="Phone Number*" required />
          <input type="email" placeholder="E-mail*" required />
          <input type="text" placeholder="Interested In" />
          <textarea rows="5" placeholder="Message*" required />

          <button type="submit" className="contact-submit">
            Send Email <span className="arrow">→</span>
          </button>
        </form>

        {/* Contact Image */}
        <div className="contact-image">
          <img src={contactImg} alt="Person on phone" />
        </div>
      </div>
    </section>
  );
};

export default ContactUs; 