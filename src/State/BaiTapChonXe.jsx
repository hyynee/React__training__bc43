import React, { Component } from "react";

export default class BaiTapChonXe extends Component {
  state = {
    srcCar: "./img/products/black-car.jpg",
  };
  handleChangeColor = (color) => {
    this.setState(
      {
        srcCar: `./img/products/${color}-car.jpg`,
      },
      () => {
        console.log(this.state);
      }
    );
  };
  render() {
    return (
      <div className="container">
        <h3> Chọn xe muốn ngắm </h3>
        <div className="row">
          <div className="col-6">
            <img src={this.state.srcCar} className="w-100"></img>
          </div>
          <div className="col-6">
            <button
              className="btn btn-dark mx-2"
              onClick={() => {
                this.handleChangeColor("black");
              }}
            >
              Black Car
            </button>
            <button
              className="btn btn-danger mx-2"
              onClick={() => {
                this.handleChangeColor("red");
              }}
            >
              Red Car
            </button>
            <button
              className="btn btn-light mx-2"
              onClick={() => {
                this.handleChangeColor("steel");
              }}
            >
              Steel Car
            </button>
            <button
              className="btn btn-secondary mx-2"
              onClick={() => {
                this.handleChangeColor("silver");
              }}
            >
              Silver Car
            </button>
          </div>
        </div>
      </div>
    );
  }
}
