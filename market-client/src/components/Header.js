import React from 'react';
import '../styles/Header.css';
import BackgroundAnimation from '../pages/BackgroundAnimation';

const Logo = () => (
  <svg 
    viewBox="0 0 100 100" 
    className="h-8 w-8 mr-2"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path 
      d="M10 50 L50 10 L90 50 L50 90 Z" 
      fill="#0088cc"
      opacity="0.8"
    />
    <path 
      d="M30 50 L50 30 L70 50 L50 70 Z" 
      fill="#00aaff"
      opacity="0.6"
    />
  </svg>
);

function Header({ logo, navItems }) {
  return (

    
    <header className="header">
      
      <nav className="nav-container">
        <div className="logo">{logo}</div>
        
        <ul className="nav-items">
          {navItems.map((item) => (
            <li key={item.label}>
              <a href={item.href}>{item.label}</a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Header;