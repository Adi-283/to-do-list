import React, { useState } from 'react';

function Contact() {
  const groupMembers = [
    { name: 'Patel Meet Vimalkumar', email: 'mpatel2879@conestogac.on.ca' },
    { name: 'Patel Pratikkumar Harshadbhai', email: 'ppatel8235@conestogac.on.ca' },
    { name: 'Patel Prince Janakbhai', email: 'ppatel7414@conestogac.on.ca' },
    { name: 'Mehta Aditya Mehul', email: 'amehta6740@conestogac.on.ca' },
  ];

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent default form submission

    // Form validation
    if (!formData.name.trim()) {
      setErrors(prevErrors => ({ ...prevErrors, name: 'Name is required' }));
      return;
    } else {
      setErrors(prevErrors => ({ ...prevErrors, name: '' }));
    }

    if (!formData.email.trim()) {
      setErrors(prevErrors => ({ ...prevErrors, email: 'Email is required' }));
      return;
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email.trim())) {
      setErrors(prevErrors => ({ ...prevErrors, email: 'Invalid email format' }));
      return;
    } else {
      setErrors(prevErrors => ({ ...prevErrors, email: '' }));
    }

    if (!formData.message.trim()) {
      setErrors(prevErrors => ({ ...prevErrors, message: 'Message is required' }));
      return;
    } else {
      setErrors(prevErrors => ({ ...prevErrors, message: '' }));
    }

    // Here, you would typically send data to your backend 
    console.log('Form data:', formData);

    // Simulate successful submission
    setIsSubmitted(true);

    // Clear the form fields
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div>
      <h1>Contact</h1>

      <h2>Group Members - Contact Info</h2>
      <ul>
        {groupMembers.map((member) => (
          <li key={member.email}>
            <b>{member.name}</b>: {member.email}
          </li>
        ))}
      </ul>

      <div className="contact-form">
        <form onSubmit={handleSubmit}>
            <h2>Contact Us Form</h2>
          <div>
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
            {errors.name && <p className="error">{errors.name}</p>}
          </div>
          <div>
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
            {errors.email && <p className="error">{errors.email}</p>}
          </div>
          <div>
            <label htmlFor="message">Message:</label>
            <textarea id="message" name="message" value={formData.message} onChange={handleChange} required />
            {errors.message && <p className="error">{errors.message}</p>}
          </div>
          <button type="submit">Submit</button>
        </form>
        {isSubmitted && (
          <p>Thank you for your message! We'll get back to you shortly.</p>
        )}
      </div>
    </div>
  );
}

export default Contact;