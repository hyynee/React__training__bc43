// import các thư viện react

import React from 'react';
import ReactDOM from 'react-dom/client';
import DemoClass from './Component/DemoClass';
import Home from './Component/HomeComponent/Home';
import DataBinding from './DataBinding/DataBinding';
import HandleEvent from './HandleEvent/HandleEvent';
import BaiTapChonXe from './State/BaiTapChonXe';
import Demologin from './State/Demologin';
import DemoState from './State/DemoState';
// Nội dung toàn bộ website sẽ được chứa trong hàm render
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <div>
 {/* <Home></Home> */}
 {/* <DataBinding></DataBinding> */}
 {/* <HandleEvent></HandleEvent> */}
 {/* <Demologin></Demologin> */}
 <DemoState></DemoState>
 </div>
);


