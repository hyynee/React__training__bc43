import React, { Component } from 'react'

export default class Detail extends Component {
    render() {
      let {phone,xemChiTiet} = this.props;
    return (
      <div>
          <div className="card">
            <img src={phone.hinhAnh} alt="..." height={"100%"} />
            <div className="card-body">
              <h3>{phone.tenSP}</h3>
              <p>{phone.giaBan.toLocaleString()}VNĐ</p>
              <button className="btn btn-success" onClick={() => {
                xemChiTiet(phone)
              }}>Xem chi tiet</button>
            </div>
          </div>
      </div>
    )
  }
}
