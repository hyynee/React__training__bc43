import React, { Component } from "react";
import { connect } from "react-redux";

export class DemoCarRedux extends Component {
  render() {
    return (
      <div className="container">
        <h1>CHỌN CAR ĐI EM</h1>
        <div className="row">
          <div className="col-6">
            <img src={this.props.imgCar} alt="" />
          </div>
          <div className="col-6">
            <button
              className="btn btn-danger mt-2 mx-2"
              onClick={() => {
                const action = {
                  type: "CHANGE_COLOR",
                  payload:"./img/products/red-car.jpg",
                };
                // dùng hàm này đưa dữ liệu lên redux
                this.props.dispatch(action);
              }}
            >
              RED
            </button>
            <button className="btn btn-dark mt-2 mx-2">Black</button>
            <button className="btn btn-primary mt-2 mx-2">SILVER</button>
          </div>
        </div>
      </div>
    );
  }
}

// hàm này là hàm lấy state từ redux về biến thành this.props component
const mapStateToProps = (state) => {
  return {
    imgCar: state.imgCar,
  };
};

// bỏ hàm này
// const mapDispatchToProps = {}

export default connect(mapStateToProps)(DemoCarRedux);
