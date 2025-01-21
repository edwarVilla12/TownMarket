import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/DevelopersPage.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faDatabase, 
  faCloud, 
  faServer, 
  faBolt,
  faArrowLeft 
} from '@fortawesome/free-solid-svg-icons';
import { faJava, faReact } from '@fortawesome/free-brands-svg-icons';

function DevelopersPage() {
  const navigate = useNavigate();
  const [developers, setDevelopers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchDevelopers = async () => {
      try {
        const response = await fetch('http://localhost:8080/api/developers');
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        setDevelopers(data);
        setError(null);
      } catch (err) {
        console.error('Error fetching developers:', err);
        setError('Failed to load developers. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchDevelopers();
  }, []);

  const getStackIcon = (stack) => {
    const normalizedStack = stack.toLowerCase().trim();
    if (normalizedStack.includes('java')) return <FontAwesomeIcon icon={faJava} />;
    if (normalizedStack.includes('react')) return <FontAwesomeIcon icon={faReact} />;
    if (normalizedStack.includes('sql')) return <FontAwesomeIcon icon={faDatabase} />;
    if (normalizedStack.includes('cloud')) return <FontAwesomeIcon icon={faCloud} />;
    if (normalizedStack.includes('server')) return <FontAwesomeIcon icon={faServer} />;
    return <FontAwesomeIcon icon={faBolt} />;
  };

  if (loading) {
    return (
      <div className="page">
        <div className="spinner-container">
          <div className="spinner"></div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="page">
        <div className="error-container">
          <h2>{error}</h2>
        </div>
      </div>
    );
  }

  return (
    <div className="page">
    <div className="background-grid" />
    <div className="content-wrapper">
      <header className="header">
        <button 
          className="back-button"
          onClick={() => navigate('/')}
        >
          <FontAwesomeIcon icon={faArrowLeft} />
          <span>Back</span>
        </button>
        <h1 className="title">Available Developers</h1>
        <p className="subtitle">Discover our expert team of technology professionals</p>
      </header>

        <div className="grid">
          {developers.map(dev => (
            <div 
              key={dev.id} 
              className="card"
              onClick={() => navigate(`/developers/${dev.id}`)}
            >
              <div className="card-glow" />
              <div className="card-content">
                <div className="card-header">
                  <div className="avatar">
                    {dev.developerName.charAt(0)}
                  </div>
                  <div className="developer-info">
                    <h3 className="developer-name">{dev.developerName}</h3>
                    <p className="developer-role">{dev.developerDesc}</p>
                  </div>
                </div>

                <div className="section">
                  <h4 className="section-title">Tech Stack</h4>
                  <div className="tags">
                    {dev.developerStack.split('-').map((tech, index) => (
                      <span key={index} className="tag">
                        {getStackIcon(tech)}
                        <span className="tag-text">{tech.trim()}</span>
                      </span>
                    ))}
                  </div>
                </div>

                <div className="section">
                  <h4 className="section-title">Hiring Modes</h4>
                  <div className="tags">
                    {dev.developerHiringMode.split('-').map((mode, index) => (
                      <span key={index} className="tag">
                        {getStackIcon(mode)}
                        <span className="tag-text">{mode.trim()}</span>
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default DevelopersPage;