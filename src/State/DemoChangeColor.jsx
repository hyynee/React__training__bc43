import React, { Component } from "react";

export default class DemoChangeColor extends Component {
  state = {
    colorHome: "red",
  };
  handleColor = (color) => {
    this.setState({
      colorHome: `${color}`,
    });
  };
  render() {
    return (
      <div className="container">
        <i
          style={{ color: this.state.colorHome }}
          className="fa fa-home display-1"
        ></i>
        <select
          className="mt-2 form-control w-25"
          id=""
          onChange={(color) => {
            let { value } = color.target;
            this.handleColor(value);
          }}
        >
          <option value="red">red</option>
          <option value="green">green</option>
          <option value="blue">blue</option>
        </select>
      </div>
    );
  }
}
