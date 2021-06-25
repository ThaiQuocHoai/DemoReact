import React, { Component } from "react";

export default class RenderWithState extends Component {
  /* Sự khác biệt giữa biến và thuộc tính, cũng như hàm và phương thức
    - Thuộc tính và phương thức: Có thể sử dụng được trong những phương thức khác
    - Hàm và biến: Chỉ sử dụng được tại nơi khai báo nó thôi
    */
  /*state là thuộc tính có sẵn của react component. dùng để chứa 
  các giá trị thay đổi trên giao diện khi người dùng thao tác (click, gõ ,..)*/
  state = {
    login: false,
  };

  username = "Thai Quoc Hoai";

  renderLogin = () => {
    if (this.state.login) {
      return <span>{this.username}</span>;
    }
    return (
      <button className="btn btn-outline-success my-2 my-sm-0" type="submit"
            onClick ={()=>{
                this.handleLogin();
            }}
      >
        Đăng nhập
      </button>
    );
  };

  handleLogin = () => {
      /*
        this.setState: Là phương thức có sẵn của react class component dùng để thay đổi
        giá trị của state và gọi lại hầm render => giao diện thay đổi
      */
      let newState = {
          login : true
      }
      this.setState(newState);
  }

  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark text-white">
          <a className="navbar-brand" href="#">
            CYBERSOFT
          </a>
          <button
            className="navbar-toggler d-lg-none"
            type="button"
            data-toggle="collapse"
            data-target="#collapsibleNavId"
            aria-controls="collapsibleNavId"
            aria-expanded="false"
            aria-label="Toggle navigation"
          />
          <div className="collapse navbar-collapse" id="collapsibleNavId">
            <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
              <li className="nav-item active">
                <a className="nav-link" href="#">
                  Home <span className="sr-only">(current)</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Link
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="dropdownId"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Dropdown
                </a>
                <div className="dropdown-menu" aria-labelledby="dropdownId">
                  <a className="dropdown-item" href="#">
                    Action 1
                  </a>
                  <a className="dropdown-item" href="#">
                    Action 2
                  </a>
                </div>
              </li>
            </ul>
            <div className="form-inline my-2 my-lg-0">
              {/* {this.login == true ? (
                <span>{this.username}</span>
              ) : (
                <button
                  className="btn btn-outline-success my-2 my-sm-0"
                  type="submit"
                >
                  Đăng nhập
                </button>
              )} */}

              {this.renderLogin()}
            </div>
          </div>
        </nav>
      </div>
    );
  }
}
