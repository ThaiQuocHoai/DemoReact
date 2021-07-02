import React, { Component } from "react";

export default class SanPhamRedux extends Component {
  render() {
    let { sanpham } = this.props;
    return (
      <div className="card text-white bg-primary">
        <img height={300} className="card-img-top" src={sanpham.hinhAnh} alt="..." />
        <div className="card-body">
          <h4 className="card-title">{sanpham.tenSP}</h4>
          <p className="card-text">{sanpham.giaSP}</p>
          <button className="btn btn-success">Them vao gio</button>
        </div>
      </div>
    );
  }
}
