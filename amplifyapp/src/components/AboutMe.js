import React, { useEffect, useState } from 'react';
import { styled } from '@mui/material/styles';
import { Container, Typography } from '@mui/material';
import '../styles/AboutMe.css'; // Import the custom AboutMe styles

const AboutMeContainer = styled(Container)(({ theme }) => ({
  paddingTop: theme.spacing(4),
  paddingBottom: theme.spacing(4),
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
}));

const ProfileImage = styled('img')({
  width: '150px',
  height: '150px',
  borderRadius: '50%',
  marginBottom: '20px',
  objectFit: 'cover',
  boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)', // Add a subtle shadow
});

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
      <AboutMeContainer>
        <ProfileImage src="/images/profile.jpg" alt="Profile" />
        <Typography variant="h4" gutterBottom>
          Welcome to My World
        </Typography>
        <Typography variant="body1" gutterBottom>
          {message || 'Your introduction and personal details go here.'}
        </Typography>
        <Typography variant="body2" color="textSecondary">
          Let me tell you a bit about myself...
        </Typography>
      </AboutMeContainer>
    </section>
  );
};

export default AboutMe;
