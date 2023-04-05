import React, { Component } from "react";

const TITLE = "CYBERSOFT";

const renderInfo = (name, age) => {
  // nội dung của hàm trả về trong jsx là primitive value(string, boolean, number, jsx) // không trả về array hay object
  return <span>{`Xin Chào ${name} - ${age} tuổi`}</span>;
};

export default class DataBinding extends Component {
  user = {
    userName: "Khai",
    password: 123,
  };

  render() {
    return (
      <div className="container">
        <h3 id="title">{TITLE}</h3>
        <p>{renderInfo("Tùng", 18)}</p>

        <div className="card w-25">
          <h3 className="card-header text-center bg-dark text-white">
            User Info
          </h3>
          <div className="card-body">
            <p>User Name</p>
            <input className="form-control" value={this.user.userName} />
            <p>Password</p>
            <input
              type="password"
              className="form-control"
              value={this.user.password}
            />
          </div>
        </div>
      </div>
    );
  }
}
