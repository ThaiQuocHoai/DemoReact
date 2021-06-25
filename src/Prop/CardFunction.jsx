import React from 'react'

//prop là thuộc tính chứa giá trị từ component cha
//chuyền vào
export default function CardFunction(props) {

    const products = props.product;

    return (
        <div className="card bg-dark text-white">
                <img src={products.image} alt="..." />
                <div className="card-body">
                    <p>{products.name}</p>
                    <p>{products.price}</p>
                </div>
            </div>
    )
}
