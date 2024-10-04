import React from 'react';

const SingleProduct = ({item}) => (
  <div className="row">
    <div className="col s12 m6">
      <div className="card blue-grey darken-1">
        <div className="card-content white-text">
          <span className="card-title">{item.productName} {item.prodDesc}</span>
        </div>
        <div className="card-action">
          <p>{item.prodVal}</p>
        </div>
      </div>
    </div>
  </div>
);

export default SingleProduct;