import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/ProjectsPage.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faDatabase, 
  faCloud, 
  faServer, 
  faBolt,
  faArrowLeft 
} from '@fortawesome/free-solid-svg-icons';
import { faJava, faReact } from '@fortawesome/free-brands-svg-icons';

  function ProjectsPage() {
    const navigate = useNavigate();
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
  
    const getStackIcon = (stack) => {
      const normalizedStack = stack.toLowerCase().trim();
      if (normalizedStack.includes('java')) return <FontAwesomeIcon icon={faJava} />;
      if (normalizedStack.includes('react')) return <FontAwesomeIcon icon={faReact} />;
      if (normalizedStack.includes('sql')) return <FontAwesomeIcon icon={faDatabase} />;
      if (normalizedStack.includes('cloud')) return <FontAwesomeIcon icon={faCloud} />;
      if (normalizedStack.includes('server')) return <FontAwesomeIcon icon={faServer} />;
      return <FontAwesomeIcon icon={faBolt} />;
    };

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch('http://localhost:8080/api/projects');
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        setProjects(data);
        setError(null);
      } catch (err) {
        console.error('Error fetching projects:', err);
        setError('Failed to load projects. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);



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
    <div className="proj-page">
      <div className="proj-background-grid" />
      <div className="proj-content-wrapper">
        <header className="proj-header">
          <button 
            className="proj-back-button"
            onClick={() => navigate('/')}
          >
            <FontAwesomeIcon icon={faArrowLeft} />
            <span>Back</span>
          </button>
          <h1 className="proj-title">Available Projects</h1>
          <p className="proj-subtitle">Discover our innovative solutions</p>
        </header>

        <div className="proj-grid">
          {projects.map(project => (
            <div 
              key={project.id} 
              className="proj-card"
              onClick={() => navigate(`/projects/${project.id}`)}
            >
              <div className="proj-card-glow" />
              <div className="proj-card-content">
                <div className="proj-card-header">
                  <div className="proj-avatar">
                    {project?.name?.charAt(0)}
                  </div>
                  <div className="proj-info">
                    <h3 className="proj-name">{project?.name}</h3>
                    <p className="proj-description">{project?.description}</p>
                  </div>
                </div>

                <div className="proj-section">
                  <h4 className="proj-section-title">Technologies</h4>
                  <div className="proj-tags">
                    {project?.technologies?.split('-').map((tech, index) => (
                      <span key={index} className="proj-tag">
                        {getStackIcon(tech)}
                        <span className="proj-tag-text">{tech.trim()}</span>
                      </span>
                    ))}
                  </div>
                </div>

                <div className="proj-section">
                  <h4 className="proj-section-title">Project Type</h4>
                  <div className="proj-tags">
                    <span className="proj-tag">
                      {getStackIcon(project?.type)}
                      <span className="proj-tag-text">{project?.type}</span>
                    </span>
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
export default ProjectsPage;