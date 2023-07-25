import React from 'react';
import { Link } from 'react-scroll';
import { AppBar, Toolbar, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import '../styles/Header.css'; // Import the custom header styles
import ArrowButton from './ArrowButton'; // Import the ArrowButton component

const HeaderAppBar = styled(AppBar)(({ theme }) => ({
  borderBottom: 'none', // Remove the bottom border
  boxShadow: '0px 2px 5px rgba(0, 0, 0, 0.1)', // Add a shadow at the bottom
  padding: '10px 40px', // Add padding to make it narrower
}));

const SectionLink = styled(Link)(({ theme }) => ({
  textDecoration: 'none',
  color: 'inherit',
  '&:hover': {
    backgroundColor: 'white', // Show white background on hover
    borderRadius: '20px', // Add capsule shape
    transition: 'background-color 0.2s ease', // Add smooth transition
  },
  padding: '10px 20px',
  marginLeft: '10px',
}));

const Header = () => {
  return (
    <HeaderAppBar position="static" className="header">
      <Toolbar style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Typography variant="h6">Your Website Name</Typography>
        <nav className="navbar">
          <ul className="nav-list" style={{ display: 'flex' }}>
            <li className="nav-item">
              <SectionLink
                to="about"
                smooth={true}
                duration={500}
                className="nav-link" 
                activeClass="active" 
              >
                About Me
              </SectionLink>
            </li>
            <li className="nav-item">
              <SectionLink
                to="skills"
                smooth={true}
                duration={500}
                className="nav-link"
                activeClass="active" 
              >
                Skills
              </SectionLink>
            </li>
            {/* <li className="nav-item" style={{ width: '170px' }}>
              <SectionLink
                to="experience"
                smooth={true}
                duration={500}
                className="nav-link" 
                activeClass="active" 
              >
                Experience
              </SectionLink>
            </li> */}
            <li className="nav-item">
              <SectionLink
                to="contact"
                smooth={true}
                duration={500}
                className="nav-link" 
                activeClass="active" 
              >
                Contact
              </SectionLink>
            </li>
          </ul>
        </nav>
        {/* Remove the ArrowIcon and use the ArrowButton component */}
        <ArrowButton />
      </Toolbar>
    </HeaderAppBar>
  );
};

export default Header;
