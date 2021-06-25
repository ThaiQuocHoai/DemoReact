import React, { Component } from "react";

export default class HandleEvent extends Component {
  showMessage = () => {
    alert("2131231");
  };

  showTitle =(name) =>{
    console.log(`Hello ${name}`);
  };

  render() {
    const name = "Hoai";
    const handleClick = (event) => {
      alert("Hello world");
    };

    return (
      <div className="container">
        Xử lí sự kiện trong react
        <br />
        <button onClick={handleClick} id="btnClick">
          Click me !!!
        </button>
        <br />
        <button
          onClick={() => {
            alert(`hello ${name}`);
            this.showTitle("hoai");
          }}
          id="btnClick"
        >
          Show message !!!
        </button>
      </div>
    );
  }
}
