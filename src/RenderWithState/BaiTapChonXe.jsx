import React, { Component } from "react";
import mau from './BaiTapChonXe.module.css';

export default class BaiTapChonXe extends Component {
    /*
        Các bước thực hành bài tập react
        1/ Dàn layout
        2/ + Chia nhỏ component. 
           + Xác định state: xác định thay đổi trên giao diện là gì (src, innerHTMl ,..) ? 
           Dùng kiểu nào để lưu trữ
        3/ Xử Lý setState làm thay đổi giá trị đó cài đặt vào các event (onclick, onchange, ..)
    */


    state ={
        imgSrc : './imgs/CarBasic/products/black-car.jpg',
    }

    handleChangeColor = (color) => {
        this.setState({
            imgSrc : `./imgs/CarBasic/products/${color}-car.jpg`
        })
    }

  
    render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-6">
            <img
              className="w-100"
              src={this.state.imgSrc}
              alt
            />
          </div>
          <div className="col-6">
            <div className="card">
              <div className={`card-header ${mau['text-red']}`}>Exterior</div>
              <div className="card-body">
                <div
                  className="row mt-2 border border-dark p-2"
                  style={{ cursor: "pointer" }}
                    onClick={()=>{
                        this.handleChangeColor('black')}
                    }
                >
                  <div className="col-2">
                    <img
                      className="w-100"
                      src="./imgs/CarBasic/icons/icon-black.jpg"
                      alt=""
                    />
                  </div>
                  <div
                    className="col-10 d-flex"
                    style={{ justifyContent: "start", alignItems: "center" }}
                  >
                    Black Color
                  </div>
                </div>
                <div
                  className="row mt-2 border border-dark p-2"
                  style={{ cursor: "pointer" }}
                  onClick={()=>{
                      this.handleChangeColor('red')}
                  }
                >
                  <div className="col-2">
                    <img
                      className="w-100"
                      src="./imgs/CarBasic/icons/icon-red.jpg"
                      alt=""
                    />
                  </div>
                  <div
                    className="col-10 d-flex"
                    style={{ justifyContent: "start", alignItems: "center" }}
                  >
                    Red Color
                  </div>
                </div>
                <div
                  className="row mt-2 border border-dark p-2"
                  style={{ cursor: "pointer" }}
                  onClick={()=>{
                      this.handleChangeColor('silver')}
                  }
                >
                  <div className="col-2">
                    <img
                      className="w-100"
                      src="./imgs/CarBasic/icons/icon-silver.jpg"
                      alt=""
                    />
                  </div>
                  <div
                    className="col-10 d-flex"
                    style={{ justifyContent: "start", alignItems: "center" }}
                  >
                    Silver Color
                  </div>
                </div>
                <div
                  className="row mt-2 border border-dark p-2"
                  style={{ cursor: "pointer" }}
                  onClick={()=>{
                      this.handleChangeColor('steel')}
                  }
                >
                  <div className="col-2">
                    <img
                      className="w-100"
                      src="./imgs/CarBasic/icons/icon-steel.jpg"
                      alt=""
                    />
                  </div>
                  <div
                    className="col-10 d-flex"
                    style={{ justifyContent: "start", alignItems: "center" }}
                  >
                    Steel Color
                  </div>
                </div>
              </div>
            </div>
            <div className="card-footer">Wheels</div>
          </div>
        </div>
      </div>
    );
  }
}
