import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    companyName: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Process form data here
    console.log('Form submitted:', formData);
  };

  return (
    <form onSubmit={handleSubmit} className="container mt-5">
      <div className="mb-3">
        <label className="form-label">First Name</label>
        <input
          type="text"
          name="firstName"
          className="form-control"
          placeholder="Enter your first name"
          value={formData.firstName}
          onChange={handleChange}
          required
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Last Name</label>
        <input
          type="text"
          name="lastName"
          className="form-control"
          placeholder="Enter your last name"
          value={formData.lastName}
          onChange={handleChange}
          required
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Company Name</label>
        <input
          type="text"
          name="companyName"
          className="form-control"
          placeholder="Enter your company name"
          value={formData.companyName}
          onChange={handleChange}
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Email</label>
        <input
          type="email"
          name="email"
          className="form-control"
          placeholder="Enter your email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Phone</label>
        <input
          type="tel"
          name="phone"
          className="form-control"
          placeholder="Enter your phone number"
          value={formData.phone}
          onChange={handleChange}
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Message</label>
        <textarea
          name="message"
          className="form-control"
          placeholder="Enter your message"
          value={formData.message}
          onChange={handleChange}
        />
      </div>
      <button type="submit" className="btn btn-primary">Submit</button>
    </form>
  );
};

export default ContactForm;
