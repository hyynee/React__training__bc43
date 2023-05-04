import React, { Component } from 'react'

export default class Detail extends Component {
    render() {
      let {phone,xemChiTiet,ThemGioHang} = this.props;
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
              <button className='btn btn-dark mx-2' onClick={() => {
                ThemGioHang(phone)
              }}><i className='fa fa-cart-plus'></i>Thêm Giỏ Hàng</button>
              {/* <button className='btn btn-dark m-2'><i className='fa fa-cart-plus'></i>Thêm giỏ hàng</button> */}
            </div>
          </div>
      </div>
    )
  }
}
