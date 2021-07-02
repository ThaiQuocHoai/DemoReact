import React, { Component } from 'react'

export default class SanPham extends Component {
    render() {
        let item = this.props.sp;
        return (
            <div className="card bg-dark text-white">
                    <img src={item.hinhAnh} height={300} alt="" />
                    <div className="card-body">
                        <p>{item.tenSP}</p>
                        <p>{item.giaBan}</p>
                        <button className="btn btn-success"
                         onClick={()=>{
                            this.props.xemChiTiet(item);
                        }}
                        >Xem chi tiết</button>
                        <button className="btn btn-primary ml-3" onClick={() =>{
                            this.props.themGioHang(item)
                        }}>Thêm vào giỏ</button>
                    </div>
                </div>
        )
    }
}
