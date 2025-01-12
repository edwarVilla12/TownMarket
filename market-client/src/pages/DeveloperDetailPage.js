import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import '../styles/DevelopersPage.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faDatabase, faCloud, faServer, faBolt, 
  faArrowLeft, faEnvelope, faPhone, faStar 
} from '@fortawesome/free-solid-svg-icons';
import { faJava, faReact } from '@fortawesome/free-brands-svg-icons';

function DeveloperDetailPage() {
  const { developerId } = useParams();
  const navigate = useNavigate();
  const [developer, setDeveloper] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchDeveloper = async () => {
      try {
        const response = await fetch(`http://localhost:8080/api/developers/${developerId}`);
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        setDeveloper(data);
        setError(null);
      } catch (err) {
        console.error('Fetch error:', err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    if (developerId) {
      fetchDeveloper();
    }
  }, [developerId]);

  if (loading) {
    return <div className="page"><div className="spinner"></div></div>;
  }

  if (error || !developer) {
    return (
      <div className="page">
        <div className="error-container">
          <h2>{error || 'Developer not found'}</h2>
          <button onClick={() => navigate('/developers')} className="button">
            Back to Developers
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="page">
      <div className="background-grid" />
      
      <header className="header">
        <button className="back-button" onClick={() => navigate('/developers')}>
          <FontAwesomeIcon icon={faArrowLeft} /> Back
        </button>
        <h1 className="title">Developer Profile</h1>
      </header>

      <div className="detail-container">
        <div className="detail-card">
          <div className="card-content">
            <div className="card-header">
              <div className="avatar large">
                {developer.developerName.charAt(0)}
              </div>
              <div className="developer-info">
                <h3 className="developer-name">{developer.developerName}</h3>
                <p className="developer-role">{developer.developerDesc}</p>
              </div>
            </div>

            <div className="section">
              <h4>Tech Stack</h4>
              <div className="tags">
                {developer.developerStack.split('-').map((tech, index) => (
                  <span key={index} className="tag">
                    {tech.trim()}
                  </span>
                ))}
              </div>
            </div>

            <div className="section">
              <h4>Hiring Modes</h4>
              <div className="tags">
                {developer.developerHiringMode.split('-').map((mode, index) => (
                  <span key={index} className="tag">
                    {mode.trim()}
                  </span>
                ))}
              </div>
            </div>

            <div className="section">
              <h4>Contact</h4>
              <div className="contact-buttons">
                <button className="button primary">
                  <FontAwesomeIcon icon={faEnvelope} /> Contact
                </button>
                <button className="button secondary">
                  <FontAwesomeIcon icon={faPhone} /> Call
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DeveloperDetailPage;