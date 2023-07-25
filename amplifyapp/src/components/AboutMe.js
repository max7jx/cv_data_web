import React, { useEffect, useState } from 'react';
// import './AboutMe.css';

const AboutMe = () => {
  const [message, setMessage] = useState(''); // State to store the fetched message

  useEffect(() => {
    // Fetch data from the endpoint when the component mounts
    fetch('https://nrr6l23l1b.execute-api.us-east-1.amazonaws.com/dcv_data')
      .then((response) => response.json())
      .then((data) => setMessage(data.message))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  return (
    <section id="about-me" className="about-me">
      <h2>About Me</h2>
      <p>{message || 'Your introduction and personal details go here.'}</p>
    </section>
  );
};

export default AboutMe;
