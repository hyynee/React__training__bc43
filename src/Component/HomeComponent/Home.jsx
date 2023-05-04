// gõ rcc --> enter
import React, { Component } from "react";
import Content from "./Content";
import Header from "./Header";
import Navigation from "./Navigation";
import Footer from "./Footer";
export default class Home extends Component {
  render() {
    return (
      <div className="container" style={{paddingTop:100}}>
        <Header></Header>
        <div className="d-flex">
            {/* 
            Không set width bên trong nội dung component vì Component có thể sử dụng ở nhiều thẻ thuộc nhiều giao diện khác nhau
            */}
          <div className="w-25">
            <Navigation></Navigation>
          </div>
          <div className="w-75">
            <Content></Content>
          </div>
        </div>
      <Footer></Footer>
      </div>
    );
  }
}
