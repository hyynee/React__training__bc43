import React, { Component } from "react";

export default class TextDemo extends Component {
  render() {
    // this.props: là thuôc tính của react class component dùng để nhận giá trị từ component cha truyền vào (thẻ sử dụng thẻ này)
    // props không thể gán lại bằng giá trị khác
    let { noiDung } = this.props;
    let {name,price,img} = this.props;
    return (
      <div className="card">
        {noiDung}
        <img src={img} alt="..." />
        <div className="card-body">
          <h3>{name}</h3>
          <p>{price}</p>
        </div>
      </div>
    );
  }
}
