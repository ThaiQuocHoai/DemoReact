import React, { Component } from 'react'
import SanPham from './SanPham'
import Cart from './Cart'

export default class DemoXemChiTiet extends Component {

    mangSanPham = [
        { "maSP": 1, "tenSP": "VinSmart Live", "manHinh": "AMOLED, 6.2, Full HD+", "heDieuHanh": "Android 9.0 (Pie)", "cameraTruoc": "20 MP", "cameraSau": "Chính 48 MP & Phụ 8 MP, 5 MP", "ram": "4 GB", "rom": "64 GB", "giaBan": 5700000, "hinhAnh": "./img/vsphone.jpg" },
        { "maSP": 2, "tenSP": "Meizu 16Xs", "manHinh": "AMOLED, FHD+ 2232 x 1080 pixels", "heDieuHanh": "Android 9.0 (Pie); Flyme", "cameraTruoc": "20 MP", "cameraSau": "Chính 48 MP & Phụ 8 MP, 5 MP", "ram": "4 GB", "rom": "64 GB", "giaBan": 7600000, "hinhAnh": "./img/meizuphone.jpg" },
        { "maSP": 3, "tenSP": "Iphone XS Max", "manHinh": "OLED, 6.5, 1242 x 2688 Pixels", "heDieuHanh": "iOS 12", "cameraSau": "Chính 12 MP & Phụ 12 MP", "cameraTruoc": "7 MP", "ram": "4 GB", "rom": "64 GB", "giaBan": 27000000, "hinhAnh": "./img/applephone.jpg" }
    ]

    state = {
        sanPhamChiTiet: { "maSP": 1, "tenSP": "VinSmart Live", "manHinh": "AMOLED, 6.2, Full HD+", "heDieuHanh": "Android 9.0 (Pie)", "cameraTruoc": "20 MP", "cameraSau": "Chính 48 MP & Phụ 8 MP, 5 MP", "ram": "4 GB", "rom": "64 GB", "giaBan": 5700000, "hinhAnh": "./img/vsphone.jpg" },
        gioHang: [
            // {maSP: 3, tenSP: "Iphone XS Max", soLuong: 1, giaBan: 1000, hinhAnh: "./img/applephone.jpg"}
        ]
    }

    renderSanPham = () => {
        return this.mangSanPham.map((item, index) => {
            return <div className="col-4" key="index">
                <SanPham sp={item} xemChiTiet={this.xemChiTiet}
                 themGioHang={this.themGioHang}
                  />
            </div>
        });
    }

    xemChiTiet = (sanPhamDuocClick) => {
        this.setState({
            sanPhamChiTiet: sanPhamDuocClick
        });
    }

    themGioHang=(spClick) =>{
        // this.setState({})
        //khi ng dung click vao them san pham duoc click vao gio hang
        let spGioHang = {...spClick, soLuong:1}
        let gioHangCapNhat = [...this.state.gioHang];

        let sp = gioHangCapNhat.find(item => item.maSP === spGioHang.maSP);
        if(sp){
            sp.soLuong +=1;
        }else{
            gioHangCapNhat.push(spGioHang);
        }

        this.setState({
            gioHang: gioHangCapNhat
        })
    }

    //Hàm xoá giỏ hàng tại nơi setState giỏ hàng
    xoaGioHang=(maSP) =>{
        // console.log('ma sp', maSP);
        let gioHangCapNhat = [...this.state.gioHang];
        let index = gioHangCapNhat.findIndex(x=>x.maSP === maSP);
        if(index >=0){
            gioHangCapNhat.splice(index,1)
        }
        // gioHangCapNhat.filter(x=> x.maSP !== maSP);
        this.setState({
            gioHang: gioHangCapNhat
        })
    }

    tangGiamSoLuong = (maSP, soLuong) =>{
        // console.log(maSP, soLuong);
        let gioHangCapNhat = [...this.state.gioHang]
        let sp = gioHangCapNhat.find(x=>x.maSP ===maSP);
        if(sp){
            sp.soLuong += soLuong;

            if(sp.soLuong <1){
                this.xoaGioHang(sp.maSP);
                gioHangCapNhat = [...this.state.gioHang]
            }
        }
        this.setState({
            gioHang: gioHangCapNhat
        })
    }

    render() {
        let sanPham = this.state.sanPhamChiTiet;
        return (
            <div className="container">
                <Cart gioHang={this.state.gioHang}
                      xoaGioHang={this.xoaGioHang}   
                      tangGiamSoLuong={this.tangGiamSoLuong} />
                <h3 className="text-center">Danh Sach San Pham</h3>
                <div className="text-right">
                    <span className="btn" data-toggle="modal" data-target="#modelId">Giỏ hàng (0)</span>
                </div>
                <div className="row">
                    {this.renderSanPham()}
                </div>
                <div className="row">
                    <div className="col-4">
                        <h3>Ten Dien Thoai</h3>
                        <img src={sanPham.hinhAnh} height={300} alt="" />
                    </div>
                    <div className="col-8">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>Màn Hình</th>
                                    <td>{sanPham.manHinh}</td>
                                </tr>
                                <tr>
                                    <th>Hệ Điều Hành</th>
                                    <td>{sanPham.heDieuHanh}</td>
                                </tr>
                                <tr>
                                    <th>Cam Trước</th>
                                    <td>{sanPham.cameraTruoc}</td>
                                </tr>
                                <tr>
                                    <th>Cam Sau</th>
                                    <td>{sanPham.cameraSau}</td>
                                </tr>
                                <tr>
                                    <th>Ram</th>
                                    <td>{sanPham.ram}</td>
                                </tr>
                                <tr>
                                    <th>Rom</th>
                                    <td>{sanPham.rom}</td>
                                </tr>
                            </thead>
                        </table>
                    </div>
                </div>
            </div>
        )
    }
}
