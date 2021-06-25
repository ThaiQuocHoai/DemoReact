import React, { Component } from 'react'

export default class CardProduct extends Component {
    
    
    render() {

        let product = this.props.product;

        return (
            <div className="card">
                <img src={product.image} alt="" />
                <div className="card-body">
                    <p>{product.name}</p>
                    <p>{product.price}$</p>
                    <button className="btn btn-dark text-white">Add to card <i class="fa fa-shopping-cart"></i></button>
                </div>
            </div>
        )
    }
}
