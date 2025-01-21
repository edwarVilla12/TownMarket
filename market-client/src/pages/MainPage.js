import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/MainPage.css';
import BackgroundAnimation from './BackgroundAnimation';
import Header from '../components/Header';
import FuturisticText from '../components/FuturisticText';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faSearch, 
  faCode, 
  faBriefcase, 
  faLightbulb, 
  faRocket 
} from '@fortawesome/free-solid-svg-icons';

function MainPage() {
  const navigate = useNavigate();

  const navigationLinks = [
    { text: 'Home', path: '/' },
    { text: 'Developers', path: '/developers' },
    { text: 'Projects', path: '/projects' },
    { text: 'About', path: '/about' },
    { text: 'Contact', path: '/contact' }
  ];

  return (
    <div className="main-page">
      <BackgroundAnimation />
      
      <Header 
   
        logo={
          <div className="company-name">
            <FuturisticText text="Enigma" className="word-summer" />
            <FuturisticText text="Software" className="word-software" />
            <FuturisticText text="Company" className="word-software" />
          
          </div>
        }
      />

  <main className="hero-section">
  <div className="hero-content">
    <h1 className="hero-title">
      <span className="title-2">Your Complete Tech Universe</span>
      <br />
      <span className="hero-subtitle-line">Apps • Custom Solutions • Tech Talent</span>
    </h1>
  <p className="hero-subtitle">


      Empowering innovation and driving the future with comprehensive technology solutions.
    {/*<span className="gradient-text"> elite tech talent. </span>*/}

     {/*<span className="gradient-text"> extraordinary solutions</span>*/}
  </p>

          <div className="cta-buttons">
            <button 
              className="cta-button primary" 
              onClick={() => navigate('/developers')}
            >
              <FontAwesomeIcon icon={faSearch} />
              <span>Find Developers</span>
            </button>
            <button 
              className="cta-button secondary"
              onClick={() => navigate('/projects')}
            >
              <FontAwesomeIcon icon={faBriefcase} />
              <span>App Store</span>
            </button>
          </div>
        </div>

        <div className="features">
          <div className="feature-card">
            <div className="feature-icon">
              <FontAwesomeIcon icon={faCode} />
            </div>
            <h3>Enterprise App Marketplace</h3>
            <p>Production-ready applications built for scale. Deploy instantly with our verified collection of business-critical solutions.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">
              <FontAwesomeIcon icon={faLightbulb} />
            </div>
            <h3>Custom Development</h3>
            <p>Transform your vision into powerful solutions with our expert development team. From rapid MVP launches to scalable enterprise systems, we architect cutting-edge applications that drive measurable business impact.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">
              <FontAwesomeIcon icon={faRocket} />
            </div>
            <h3>Developer Network</h3>
            <p>Connect with certified tech talent across all major stacks. Hire specialized developers for project-based, full-time, or team augmentation needs.</p>
          </div>
        </div>
      </main>

      <footer className="footer">
        <p>© 2024 Enigma Software. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default MainPage;