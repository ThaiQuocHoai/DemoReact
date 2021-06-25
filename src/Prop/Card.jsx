import React, { Component } from 'react'

export default class Card extends Component {
    render() {

        // this.props là thuộc tính có sẵn của react class components

        // let tenSanPham = this.props.tenSanPham;
        // let giaSanPham = this.props.gia;


        //so sánh sự khác biệt giữa this.state và this.props
        //giống: đều là các thuộc tính có sẵn của rcc  để chứa
        //các giá trị cần để render ra giao diện

        //khác : 
        //- khác biệt thứ nhất:
        //+ State: dung để chứa các giá trị thay đổi người dùng
        //trên giao diện
        //+ Prop: Nhận giá trị từ components cha truyền vào
        //- Khác biệt thứ hai:
        //+ state: Có thể gán mới thuộc tính bằng setState
        //+ prop: không thể thay đổi giá trị

        let product = this.props.product;


        return (
            <div className="card bg-dark text-white">
                <img src={product.image} alt="..." />
                <div className="card-body">
                    <p>{product.name}</p>
                    <p>{product.price}</p>
                </div>
            </div>
        )
    }
}
