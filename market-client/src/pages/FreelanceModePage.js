import React, { useState, useEffect } from 'react';

function FreelanceModePage() {
  const [plans, setPlans] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/api/plans')
      .then(response => response.json())
      .then(data => setPlans(data));
  }, []);

  return (
    <div className="freelance-mode-page">
      <h2>Freelance Plans</h2>
      <div className="plans-list">
        {plans.map(plan => (
          <div key={plan.id} className="plan-card">
            <h3>{plan.name}</h3>
            <p>{plan.description}</p>
            <p>Price: ${plan.price}</p>
            <button>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FreelanceModePage;
