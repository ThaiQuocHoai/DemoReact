import React, { Component } from 'react'

export default class DataBinding extends Component {
    renderProduct = () =>{

        return <div>
            asdasdasdd
        </div>
    }
    
    render() {
        let hoten = 'Nguyen Van A';
        let product ={
            id:1,
            name: 'Iphone X',
            price: 1000,
            img: 'https://picsum.photos/200/200'
        }

        return (
            <div className="container">
                <p id="txtHoTen">Ho ten: {hoten}</p>
                <div className="w-25 at-2">
                    <div className="card">
                        <img src={product.img} alt="..."/>
                        <div className="card-body">
                            <p>{product.name}</p>
                            <p>{product.price}</p>
                        </div>
                        <div className="card-footer bg-dark text-white">
                            <button className="btn btn-success">Đặt mua</button>
                        </div>
                    </div>
                </div>
                {this.renderProduct()}
            </div>
        )
    }
}
