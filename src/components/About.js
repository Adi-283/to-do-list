// Made by Patel Meet Vimalkumar – 8882879
import React from 'react';

// About component
const About = () => {
  const groupMembers = [
    { name: 'Patel Meet Vimalkumar', id: '8882879', imagePath: './images/user4.png' },
    { name: 'Patel Pratikkumar Harshadbhai', id: '8868235', imagePath: './images/user3.png' },
    { name: 'Patel Prince Janakbhai', id: '8867414', imagePath: './images/user2.png' },
    { name: 'Mehta Aditya Mehul', id: '8866740', imagePath: './images/user1.png' }
  ];

  return (
    <div className="about-container">
      <h1>About Us</h1>
      <div className="group-members">
        {groupMembers.map(member => (
          <div key={member.id} className="member">
            <img src={process.env.PUBLIC_URL + member.imagePath} alt={member.name} />
            <div className="member-details">
              <h2>{member.name}</h2>
              <p>ID: {member.id}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;