import React, { Component } from "react";
//ket noi redux
import {connect} from 'react-redux'

class SanPhamRedux extends Component {
  render() {
    let { sanPham } = this.props;
    return (
      <div className="card text-black bg-white text-left">
        <img height={300} className="card-img-top" src={sanPham.hinhAnh} alt="..." />
        <div className="card-body">
          <h4 className="card-title">{sanPham.tenSP}</h4>
          <p className="card-text">{sanPham.giaSP}</p>
          <button className="btn btn-success" onClick={()=>{
            //action: du lieu gui len redux de lam thay doio cac state  hien tai
            const action = {
              type: 'THEM_VAO', // thuoc tinh bat buoc cua action
              sanPhamClick: sanPham
            }
            //dung dispatch de dua du lieu len reducer (redux store)
            this.props.dispatch(action)
          }}>Thêm vào</button>
        </div>
      </div>
    );
  }
}

export default connect()(SanPhamRedux)