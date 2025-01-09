// MainPage.js
import React from 'react';
import './MainPage.css';
import BackgroundAnimation from './BackgroundAnimation';

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

  return (
    <div>

      

      {/* Header */}
      <header>
        <nav>
          <div>Summer Software Company</div>
          <div>
            <button>About</button>
            <button>Services</button>
            <button>Contact</button>
          </div>
        </nav>
      </header>

      <BackgroundAnimation />
      
      {/* Hero Section */}
      <div className="hero-section">
        <h1>
          Welcome to the Future of
          <span className="highlight"> Tech Solutions</span>
        </h1>
        <p>
          Discover top tech talent, innovative projects, and freelance opportunities all in one place.
        </p>
        <div>
          <button>Find Developers</button>
          <button>Browse Projects</button>
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
