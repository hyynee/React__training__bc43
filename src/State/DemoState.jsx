import React, { Component } from 'react'
import BaiTapChonXe from './BaiTapChonXe'
import Demologin from './Demologin'

export default class DemoState extends Component {
  render() {
    return (
      <div>
        <Demologin></Demologin>
        <BaiTapChonXe></BaiTapChonXe>
      </div>
    )
  }
}
