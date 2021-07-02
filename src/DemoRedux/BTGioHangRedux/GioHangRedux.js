import React, { Component } from "react";
//import ket noi voi store
import { connect } from "react-redux";

class GioHangRedux extends Component {
  renderGioHang = () => {
    return this.props.gioHang.map((sp, index) => {
      return (
        <tr key={index}>
          <td>{sp.maSP}</td>
          <td>{sp.tenSP}</td>
          <td>
            <img height={100} src={sp.hinhAnh} alt="..." />
          </td>
          <td>
            <button
              className="btn btn-primary mr-2"
              onClick={() => {
                const action = {
                  type: "TANG_GIAM_SO_LUONG",
                  maSP: sp.maSP,
                  soLuong: -1,
                };
                this.props.dispatch(action);
              }}
            >
              -
            </button>
            {sp.soLuong}
            <button
              className="btn btn-primary ml-2"
              onClick={() => {
                const action = {
                  type: "TANG_GIAM_SO_LUONG",
                  maSP: sp.maSP,
                  soLuong: 1,
                };
                this.props.dispatch(action);
              }}
            >
              +
            </button>
          </td>
          <td>{sp.giaBan}</td>
          <td>{sp.giaBan * sp.soLuong}</td>
          <td>
            <button
              className="btn btn-danger"
              onClick={() => {
                const action = {
                  type: "XOA",
                  maSP: sp.maSP,
                };
                this.props.dispatch(action);
              }}
            >
              Xoá
            </button>
          </td>
        </tr>
      );
    });
  };

  render() {
    return (
      <div>
        <h5 className="text-right">Giỏ hàng(0)</h5>
        <table className="table">
          <thead>
            <tr>
              <th>Mã SP</th>
              <th>Tên SP</th>
              <th>Hình ảnh</th>
              <th>Số lượng</th>
              <th>Giá bán</th>
              <th>Thành tiền</th>
              <th></th>
            </tr>
          </thead>
          <tbody>{this.renderGioHang()}</tbody>
        </table>
      </div>
    );
  }
}

//lay state tu redux va bien thanh props cua component
const mapStateToProps = (rootReducer) => {
  let propsComponent = { gioHang: rootReducer.stateGioHang };
  return propsComponent;
};

//ham connect nhan input la component => tra ra 1 component moi mang du lieu tu store

export default connect(mapStateToProps)(GioHangRedux);
