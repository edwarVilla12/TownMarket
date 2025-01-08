import React, { Component } from 'react';

export default class AddProducts extends Component {
    constructor(props) {
        super(props);
        this.state = {
            productName: '',
            prodDesc: '',
            prodVal: ''
        };
    }

    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    }

    submitProduct = (event) => {
        event.preventDefault();

        let product = {
            productName: this.state.productName,
            prodDesc: this.state.prodDesc,
            prodVal: this.state.prodVal
        };

        fetch("http://localhost:8080/api/products", {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(product),
        })
        .then(response => response.json())
        .then(() => {
            window.location.reload();
        })
        .catch(error => console.error('Error:', error));
    }

    render() {
        return (
            <div className="row">
                <form className="col s12" onSubmit={this.submitProduct}>
                    <div className="row">
                        <div className="input-field col s6">
                            <input 
                                placeholder="" 
                                name="productName"
                                type="text" 
                                className="validate"
                                value={this.state.productName}
                                onChange={this.handleChange}
                            />
                            <label htmlFor="productName">Product</label>
                        </div>
                        <div className="input-field col s6">
                            <input 
                                name="prodDesc"
                                type="text" 
                                className="validate"
                                value={this.state.prodDesc}
                                onChange={this.handleChange}
                            />
                            <label htmlFor="prodDesc">Product Description</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s12">
                            <input 
                                name="prodVal"
                                type="text" 
                                className="validate"
                                value={this.state.prodVal}
                                onChange={this.handleChange}
                            />
                            <label htmlFor="prodVal">Value</label>
                        </div>
                    </div>
                    <div className="row">
                        <button className="waves-effect waves-light btn" type="submit" name="action">Submit</button>
                    </div>
                </form>
            </div>
        )
    }
}