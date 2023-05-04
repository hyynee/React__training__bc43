import React, { Component } from "react";
import { store } from "../../redux/configStore";
import { connect } from "react-redux";
class DemoTangGiam extends Component {
  render() {
    return (
      <div className="container">
        {/* <h1>Number: {store.getState().number}</h1> */}
        <h1>NUMBER: {this.props.number}</h1>
        <button
          className="btn btn-dark"
          onClick={() => {
            // action là dữ liệu gửi lên redux store
            const action = {
              type: "Tang_SoLuong",
              payload: 1,
            };
            // dùng phương thức dispatch(gửi dữ liệu lên redux)
            store.dispatch(action);
          }}
        >
          +
        </button>
        <button
          className="btn btn-dark mx-2"
          onClick={() => {
            const action = {
              type: "Giam_SoLuong",
              payload: 1,
            };
            store.dispatch(action);
          }}
        >
          -
        </button>
      </div>
    );
  }
}

// hàm lấy state từ redux về và biến this.props của component

const mapStateToProps = (state) => {
  return {
    number: state.number,
  };
};
const ComponentWithRedux = connect(mapStateToProps)(DemoTangGiam);
export default ComponentWithRedux;
