import { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent default form submission

    // Here, you would typically send data to your backend 
    console.log('Form data:', formData); 

    // Simulate successful submission
    setIsSubmitted(true); 

    // Optional: Clear the form 
    setFormData({ name: '', email: '', message: '' }); 
  };

  return (
    <div>
      <h1>Contact</h1>

      <h2>Group Members</h2>
      <ul>
        {groupMembers.map((member) => (
          <li key={member.email}>
            <b>{member.name}</b>: {member.email}
          </li>
        ))}
      </ul>
      {isSubmitted ? (
        <p>Thank you for your message! We'll get back to you shortly.</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
          </div>
          <div>
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
          </div>
          <div>
            <label htmlFor="message">Message:</label>
            <textarea id="message" name="message" value={formData.message} onChange={handleChange} required />
          </div>
          <button type="submit">Submit</button>
        </form>
      )}
    </div>
  );
}

export default Contact; 
