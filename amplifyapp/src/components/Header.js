import React from 'react';
import { Link } from 'react-scroll';
import '../styles/Header.css'; // Import the custom header styles

const Header = () => {
  return (
    <header className="header"> {/* Use the "header" class for the white background */}
      <nav className="navbar"> {/* Use the "navbar" class to center the links */}
        <ul className="nav-list"> {/* Use the "nav-list" class for the list */}
          <li className="nav-item">
            <Link
              to="about"
              smooth={true}
              duration={500}
              className="nav-link" 
              activeClass="active" 
            >
              About Me
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="skills"
              smooth={true}
              duration={500}
              className="nav-link"
              activeClass="active" 
            >
              Skills
            </Link>
          </li>
          {/* <li className="nav-item">
            <Link
              to="experience"
              smooth={true}
              duration={500}
              className="nav-link" 
              activeClass="active" 
            >
              Experience
            </Link>
          </li> */}
          <li className="nav-item">
            <Link
              to="contact"
              smooth={true}
              duration={500}
              className="nav-link" 
              activeClass="active" 
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
