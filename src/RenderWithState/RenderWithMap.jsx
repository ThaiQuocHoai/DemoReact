import React, { Component } from 'react'

export default class RenderWithMap extends Component {
    
    arrProduct =[
        {id:1, name: 'iphone', price: 1000, img: 'https://picsum.photos/id/10/200/200'},
        {id:2, name: 'iphone x', price: 2000, img: 'https://picsum.photos/id/20/200/200'},
        {id:3, name: 'iphone xs', price: 3000, img: 'https://picsum.photos/id/30/200/200'},
        {id:4, name: 'iphone xs max', price: 4000, img: 'https://picsum.photos/id/40/200/200'},
    ]

    renderProduct = () => {
        // let arrTagProduct = [];

        // for(let i = 0; i< this.arrProduct.length; i++){
        //     let product = this.arrProduct[i];

        //     let tagJSX = <tr>
        //         <td>{product.id}</td>
        //         <td>{product.name}</td>
        //         <td>{product.price}</td>
        //         <td><img src={product.img} alt="" width={50} height={50}/></td>
        //     </tr>;
        //     arrTagProduct.push(tagJSX);
        // }

        // return arrTagProduct;

        return this.arrProduct.map((product, index) => {
            return <tr>
                <td>{product.id}</td>
                <td>{product.name}</td>
                <td>{product.price}</td>
                <td><img src={product.img} alt="" width={50} height={50}/></td>
            </tr>;
        })
        
    }
    
    render() {
        return (
            <div className="container">
                <h3>Danh sach san pham</h3>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Ma sp</th>
                            <th>Ten sp</th>
                            <th>Gia sp</th>
                            <th>Hinh anh</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderProduct()}
                    </tbody>
                </table>
            </div>
        )
    }
}
