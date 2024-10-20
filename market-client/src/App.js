import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Product from './components/Product';
import ProductDetail from './components/ProductDetail';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <div className="nav-wrapper">
            <a href="/" className="brand-logo">Online Store</a>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
              <li><a href="#cart-modal" className="modal-trigger">Cart</a></li>
            </ul>
          </div>
        </nav>
        
        <div className="container">
          <Routes>
            {/* Home Page Route */}
            <Route path="/" element={<Product />} />
            
            {/* Product Detail Route */}
            <Route path="/product/:id" element={<ProductDetail />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
