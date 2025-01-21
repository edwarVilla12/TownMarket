import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import '../styles/Header.css';

const Header = ({ navigationLinks = [], logo }) => {
  return (
    <header className="header">
      <div className="header-content">
        <div className="header-left">
          <div className="logo-container">
            {logo}
          </div>
          <nav className="nav-links">
            {navigationLinks.map((link, index) => (
              <Link 
                key={index} 
                to={link.path} 
                className="nav-link"
              >
                {link.text}
              </Link>
            ))}
          </nav>
        </div>
        <div className="header-right">
          <Link to="/contact" className="nav-link">
            Contact Us
          </Link>
        </div>
      </div>
    </header>
  );
};

Header.propTypes = {
  navigationLinks: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string.isRequired,
      path: PropTypes.string.isRequired,
    })
  ),
  logo: PropTypes.node,
};

Header.defaultProps = {
  navigationLinks: [],
};

export default Header;