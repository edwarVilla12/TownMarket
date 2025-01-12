// MainPage.js
import React from 'react';
import '../styles/MainPage.css';
import BackgroundAnimation from './BackgroundAnimation';
import Header from '../components/Header';
import FuturisticText from '../components/FuturisticText';


function MainPage() {
  const features = [
    {
      title: 'Skilled Developers',
      description: 'Access a pool of highly skilled and vetted developers ready to tackle your projects.',
    },
    {
      title: 'Innovative Projects',
      description: 'Discover cutting-edge projects and contribute to groundbreaking solutions.',
    },
    {
      title: 'Flexible Freelancing',
      description: 'Enjoy the freedom of freelancing with the support of our robust platform.',
    },
  ];

  const navItems = [
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleFindDevelopers = () => {
    window.location.href = './developers';  // Redirect to Projects page (just an example)
  };

  const handleFindDeveloper = () => {
    window.location.href = './developers';  // Redirect to Projects page (just an example)
  };

  return (
    <div>

      <BackgroundAnimation />

      {/* Header */}
      <Header 
        logo={
          <div className="company-name">
            <FuturisticText text="Enigma" className="word-summer" />
            <FuturisticText text="Software" className="word-software" />
            <FuturisticText text="Company" className="word-company" />
          </div>
        }
        navItems={navItems}
      />

   
      
      {/* Hero Section */}
      <div className="hero-section">
        <h1>
          Welcome to the Future of
          <span className="highlight"> Enigma solutions</span>
        </h1>
        <p>
          Discover top tech talent, innovative projects, and freelance opportunities all in one place.
        </p>
        <div>
          <button onClick={handleFindDevelopers}>Find Developers</button>
          <button onClick={handleFindDeveloper}>Browse Projects</button>
        </div>
      </div>

      {/* Features Section */}
      <div className="features-section">
        <h2>Why Choose TechStore?</h2>
        <p>
          We connect talented developers with exciting projects and provide a platform for freelancers to thrive.
        </p>
        <div className="features-container">
          {features.map((feature) => (
            <div key={feature.title} className="feature-card">
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="cta-section">
        <h2>Ready to dive in?</h2>
        <p>Start your journey today.</p>
        <button>Get Started</button>
      </div>

      {/* Footer */}
      <footer>
        <p>&copy; 2025 TechStore. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default MainPage;
