// import các thư viện react

import React from "react";
import ReactDOM from "react-dom/client";
import DemoClass from "./Component/DemoClass";
import Home from "./Component/HomeComponent/Home";
import DataBinding from "./DataBinding/DataBinding";
import HandleEvent from "./HandleEvent/HandleEvent";
import RenderWithMap from "./RenderWithMap/RenderWithMap";
import BaiTapChonXe from "./State/BaiTapChonXe";
import Demologin from "./State/DemoLogin";
import DemoPageLogin from "./State/DemoPageLogin";
import DemoState from "./State/DemoState";
import StyleDemo from "./StyleDemo/StyleDemo";
import "./assets/scss/index.scss";
import DemoProps from "./Props/DemoProps";
import ProductList from "./Props/ProductList/ProductList";
import ProductDetail from "./Props/ProductDetail.jsx/ProductDetail";
// Nội dung toàn bộ website sẽ được chứa trong hàm render
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <div>
    {/* <Home></Home> */}
    {/* <DataBinding></DataBinding> */}
    {/* <HandleEvent></HandleEvent> */}
    {/* <Demologin></Demologin> */}
    {/* <DemoState></DemoState> */}
    {/* <StyleDemo></StyleDemo>
         <p className='color-red'>one two three</p> */}
    {/* <RenderWithMap></RenderWithMap> */}
    {/* <DemoPageLogin></DemoPageLogin>
    <p className="color-red">lorem5</p> */}
    {/* <DemoProps></DemoProps> */}
    {/* <ProductList></ProductList> */}
    <ProductDetail></ProductDetail>
  </div>
);
