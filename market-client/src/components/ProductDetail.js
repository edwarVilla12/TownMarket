import React, { Component } from 'react';

class ProductDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            product: null
        };
    }

    componentDidMount() {
        const { id } = this.props.match.params;
        fetch(`http://localhost:8080/api/products/${id}`)
            .then(response => response.json())
            .then(data => this.setState({ product: data }));
    }

    render() {
        const { product } = this.state;
        if (!product) return <p>Loading...</p>;

        return (
            <div className="container">
                <div className="card-panel">
                    <h4>{product.productName}</h4>
                    <p>{product.prodDesc}</p>
                    <p><strong>Price:</strong> ${product.prodVal}</p>
                    <button className="btn waves-effect waves-light">Add to Cart</button>
                </div>
            </div>
        );
    }
}

export default ProductDetail;
