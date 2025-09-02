import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    alert("Message sent successfully!");
  };

  return (
    <div className="contact-container">
      <div className="contact-card">
        <h2 className="contact-title">Contact Us</h2>
        <form onSubmit={handleSubmit}>
          <label>Name</label>
          <input type="text" name="name" placeholder="Enter your name" value={formData.name} onChange={handleChange} required />
          <label>Email</label>
          <input type="email" name="email" placeholder="Enter your email" value={formData.email} onChange={handleChange} required />
          <label>Message</label>
          <textarea name="message" placeholder="Enter your message" rows="4" value={formData.message} onChange={handleChange} required></textarea>
          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;