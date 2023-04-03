// import các thư viện react

import React from 'react';
import ReactDOM from 'react-dom/client';
import Demo from './computnent/Demo';

// Nội dung toàn bộ website sẽ được chứa trong hàm render
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <div>
  <Demo></Demo>
  <Demo></Demo>
  <Demo></Demo>
  <Demo></Demo>
 </div>
);


