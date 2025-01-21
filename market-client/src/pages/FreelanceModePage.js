import React from 'react';
import { useNavigate } from 'react-router-dom';
import BackgroundAnimation from './BackgroundAnimation';
import Header from '../components/Header';
import FuturisticText from '../components/FuturisticText';
import '../styles/MainPage.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faCode, faBriefcase } from '@fortawesome/free-solid-svg-icons';

function MainPage() {
  const navigate = useNavigate();
  const navigationLinks = [
    { text: 'Home', path: '/' },
    { text: 'Developers', path: '/developers' },
    { text: 'Projects', path: '/projects' }
  ];

  const handleFindDeveloper = () => {
    navigate('/developers');
  };

  return (
    <div className="main-page">
      <BackgroundAnimation />
      
      <Header 
        navigationLinks={navigationLinks}
        logo={
          <div className="company-name">
            <FuturisticText text="Enigma" className="word-summer" />
            <FuturisticText text="Software" className="word-software" />
            <FuturisticText text="Company" className="word-company" />
          </div>
        }
      />

      <main className="hero-section">
        <h1 className="hero-title">
          <span className="highlight">Discover</span> Expert Developers
        </h1>
        <p className="hero-subtitle">
          Connect with top-tier technology professionals
        </p>

        <div className="cta-buttons">
          <button 
            className="cta-button primary" 
            onClick={handleFindDeveloper}
          >
            <FontAwesomeIcon icon={faSearch} />
            Find Developers
          </button>
          <button 
            className="cta-button secondary"
            onClick={() => navigate('/projects')}
          >
            <FontAwesomeIcon icon={faBriefcase} />
            View Projects
          </button>
        </div>

        <div className="features">
          <div className="feature-card">
            <FontAwesomeIcon icon={faCode} className="feature-icon" />
            <h3>Expert Developers</h3>
            <p>Access to skilled professionals across various technologies</p>
          </div>
          <div className="feature-card">
            <FontAwesomeIcon icon={faBriefcase} className="feature-icon" />
            <h3>Custom Solutions</h3>
            <p>Tailored development services for your specific needs</p>
          </div>
        </div>
      </main>
    </div>
  );
}

export default MainPage;