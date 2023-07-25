// components/Header.js
import React from 'react';
import { Link } from 'react-scroll';

const Header = () => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link to="about" smooth={true} duration={500}>
              About Me
            </Link>
          </li>
          {/* <li>
            <Link to="skills" smooth={true} duration={500}>
              Skills
            </Link>
          </li>
          <li>
            <Link to="experience" smooth={true} duration={500}>
              Experience
            </Link>
          </li>
          <li>
            <Link to="contact" smooth={true} duration={500}>
              Contact
            </Link>
          </li> */}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
