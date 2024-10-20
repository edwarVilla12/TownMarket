import React, { Component } from 'react';
import SingleProduct from './SingleProduct';
import AddProducts from './AddProducts';

export default class Product extends Component {
    constructor(props) {
        super(props);
        this.state = {
            products: [],
            cart: []
        };
    }

    componentDidMount() {
        fetch('http://localhost:8080/api/products')
            .then(response => response.json())
            .then(data => this.setState({ products: data }));

        // Initialize Materialize modal
        const elems = document.querySelectorAll('.modal');
        window.M.Modal.init(elems);
    }

    addToCart = (product) => {
        this.setState((prevState) => ({
            cart: [...prevState.cart, product]
        }));
    }

    renderCartItems = () => {
        return this.state.cart.map((item, index) => (
            <li key={index} className="collection-item">
                {item.productName} - ${item.prodVal}
            </li>
        ));
    }

    render() {
        return (
            <div>
                <div className="row">
                    <AddProducts />
                </div>
                <div className="row">
                    {this.state.products.map((item) => (
                        <SingleProduct key={item.id} item={item} addToCart={this.addToCart} />
                    ))}
                </div>

                {/* Cart modal */}
                <div id="cart-modal" className="modal">
                    <div className="modal-content">
                        <h4>Your Cart</h4>
                        <ul className="collection">
                            {this.renderCartItems()}
                        </ul>
                    </div>
                    <div className="modal-footer">
                        <button className="modal-close waves-effect waves-green btn-flat">Close</button>
                        <button className="btn waves-effect waves-light">Checkout</button>
                    </div>
                </div>

                {/* Cart Trigger Button */}
                <div className="fixed-action-btn">
                    <a href="#cart-modal" className="btn-floating btn-large red modal-trigger">
                        <i className="large material-icons">shopping_cart</i>
                    </a>
                </div>
            </div>
        );
    }
}
