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
// cấu hình react router dom
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import HomeTemplate from "./Teamplate/HomeTemplate";
import Login from "./Page/Login";
import Profile from "./Page/Profile";
import ReactFormDemo from "./ReactFFormDemo/ReactFormDemo";
import ReactLifeCycle from "./Page/ReactLifeCycle/ReactLifeCycle";
// Nội dung toàn bộ website sẽ được chứa trong hàm render

// cấu hình redux
// import {} from
import { Provider } from "react-redux";
import { store } from "./redux/configStore";
import DemoTangGiam from "./Page/ReduxDemo/DemoTangGiam";
import { DemoCarRedux } from "./Page/ReduxDemo/DemoCarRedux";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <div>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="" element={<HomeTemplate />}>
            <Route index element={<Home />}></Route>
            <Route index path="cart" element={<ProductDetail />}></Route>
            <Route path="cars" element={<BaiTapChonXe></BaiTapChonXe>}></Route>
            <Route path="login" element={<Login></Login>}></Route>
            <Route path="profile" element={<Profile></Profile>}></Route>
            <Route
              path="react-form"
              element={<ReactFormDemo></ReactFormDemo>}
            ></Route>
            <Route
              path="react-lifecycle"
              element={<ReactLifeCycle></ReactLifeCycle>}
            ></Route>
            <Route
              path="redux-demo1"
              element={<DemoTangGiam></DemoTangGiam>}
            ></Route>
            <Route
              path="redux-demo2"
              element={<DemoCarRedux></DemoCarRedux>}
            ></Route>
            <Route path="*" element={<Navigate to={"/"}></Navigate>}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
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
    {/* <ProductDetail></ProductDetail> */}
  </div>
);
