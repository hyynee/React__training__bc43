import React, { Component } from "react";
import "./style.css";
//
import objectStyle from "./style.module.css";
export default class StyleDemo extends Component {
  render() {
    const bg = "#000";
    return (
      <div className="container">
        <p className="color-red">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, ad.
        </p>
        <p className={objectStyle.colorPrimary}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates?
        </p>
        <h1 className={objectStyle["color-danger"]}>StyleDemo</h1>
        <h3
          className={`${objectStyle["color-danger"]} text-center bg-dark p-4`}
        >
          Bootstrap
        </h3>
        <p style={{ backgroundColor: bg }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, odio?
        </p>
      </div>
    );
  }
}
