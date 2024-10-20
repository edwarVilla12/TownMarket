import React from 'react';

const SingleProduct = ({item, addToCart}) => (
  <div className="col s12 m6 l4"> {/* Materialize grid system */}
    <div className="card">
      <div className="card-image">
        <img src="default-product.jpg" alt={item.productName} /> {/* Placeholder for product image */}
        <span className="card-title">{item.productName}</span>
      </div>
      <div className="card-content">
        <p>{item.prodDesc}</p>
        <p><strong>Price:</strong> ${item.prodVal}</p>
      </div>
      <div className="card-action">
        <button onClick={() => addToCart(item)} className="btn waves-effect waves-light">
          Add to Cart
        </button>
      </div>
    </div>
  </div>
);

export default SingleProduct;
