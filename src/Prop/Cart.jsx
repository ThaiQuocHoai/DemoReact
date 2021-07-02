import React, { Component } from 'react'

export default class Cart extends Component {


    renderGioHang = () => {
        //Nhan gia tri gio hang tu component DemoXemChiTiet
        let { xoaGioHang } = this.props;

        let gioHang = this.props.gioHang;
        return gioHang.map((item, index) => {
            return <tr key={index}>
                <td>{item.maSP}</td>
                <td>{item.tenSP}</td>
                <td><img src={item.hinhAnh} alt="..." height={50} /></td>
                <td>{item.giaBan}</td>
                <td>

                    <button className="btn btn-primary mr-2" onClick={() => {
                        this.props.tangGiamSoLuong(item.maSP, -1);
                    }}>-</button>
                    {item.soLuong}
                    <button className="btn btn-primary ml-2" onClick={() => {
                        this.props.tangGiamSoLuong(item.maSP, 1);
                    }}>+</button>
                </td>
                <td>{item.soLuong * item.giaBan}</td>
                <td><button className="btn btn-danger" onClick={() => {
                    xoaGioHang(item.maSP);
                }}>Xoá</button></td>
            </tr>
        });
    }

    render() {
        return (
            <div>
                <div>
                    {/* Modal */}
                    <div className="modal fade" id="modelId" tabIndex={-1} role="dialog" aria-labelledby="modelTitleId" aria-hidden="true">
                        <div className="modal-dialog modal-lg" role="document">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title">Giỏ Hàng</h5>
                                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">×</span>
                                    </button>
                                </div>
                                <div className="modal-body">
                                    <table className="table">
                                        <thead>
                                            <tr>
                                                <th>Mã sản phẩm</th>
                                                <th>Tên sản phẩm</th>
                                                <th>Hình ảnh</th>
                                                <th>Đơn giá</th>
                                                <th>Số lượng</th>
                                                <th>Thành tiền</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {/* <tr>
                                                <td>1</td>
                                                <td>Iphone</td>
                                                <td><img src="http://picsum.photos/id/20/200/300" height={100} alt="..." /></td>
                                                <td>10000</td>
                                                <td>2</td>
                                                <td>20000</td>
                                                <td><button className="btn btn-danger">Xoá</button></td>
                                            </tr> */}
                                            {this.renderGioHang()}
                                        </tbody>
                                        <tfoot>
                                            <tr>
                                                <td colSpan="5">
                                                    {this.props.gioHang.reduce((tongTien, sp, index) => {
                                                        return tongTien+= sp.soLuong*sp.giaBan;
                                                    },0).toLocaleString()
                                                    }
                                                </td>
                                            </tr>
                                        </tfoot>
                                    </table>
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                    <button type="button" className="btn btn-primary">Save</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}
