import React from 'react';
import Product from './components/Product';
import './App.css';

function App() {
  return (
    <div className="container-fluid">
      <nav>
        <div className="nav-wrapper center-align">
          <a href="/" className="brand-logo">Products</a>
        </div>
      </nav>
      <div className="row">
        <Product />
      </div>
    </div>
  );
}

export default App;
