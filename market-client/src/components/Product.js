import React, { Component } from 'react';
import SingleProduct from './SingleProduct';
import AddProducts from './AddProducts';

export default class Product extends Component {
    constructor(props) {
        super(props);
        this.state = {
            products: []
        };
    }

    componentDidMount() {
        fetch('http://localhost:8080/api/products')
            .then(response => response.json())
            .then(data => this.setState({products: data}))
    }

    render() {
        return (
            <div>
                <div className="row">
                    <AddProducts />
                </div>
                <div className="row">
                    {this.state.products.map((item) => (
                        <SingleProduct key={item.id} item={item} />
                    ))}
                </div>
            </div>
        )
    }
}