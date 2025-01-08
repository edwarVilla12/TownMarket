import React, { useState, useEffect } from 'react';

function DevelopersPage() {
  const [developers, setDevelopers] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/api/developers')
      .then(response => response.json())
      .then(data => setDevelopers(data));
  }, []);

  return (
    <div className="developers-page">
      <h2>Available Developers</h2>
      <div className="developers-list">
        {developers.map(dev => (
          <div key={dev.id} className="developer-card">
            <h3>{dev.name}</h3>
            <p>{dev.description}</p>
            <p>Price: ${dev.price}</p>
            <button>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DevelopersPage;
