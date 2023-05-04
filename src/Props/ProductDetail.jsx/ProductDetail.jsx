import React, { Component } from "react";
import Detail from "./Detail";
import Card from "./Card";

const dataPhone = [
  {
    maSP: 1,
    tenSP: "VinSmart Live",
    manHinh: "AMOLED, 6.2, Full HD+",
    heDieuHanh: "Android 9.0 (Pie)",
    cameraTruoc: "20 MP",
    cameraSau: "Chính 48 MP & Phụ 8 MP, 5 MP",
    ram: "4 GB",
    rom: "64 GB",
    giaBan: 5700000,
    hinhAnh: "./img/img/vsphone.jpg",
  },
  {
    maSP: 2,
    tenSP: "Meizu 16Xs",
    manHinh: "AMOLED, FHD+ 2232 x 1080 pixels",
    heDieuHanh: "Android 9.0 (Pie); Flyme",
    cameraTruoc: "20 MP",
    cameraSau: "Chính 48 MP & Phụ 8 MP, 5 MP",
    ram: "4 GB",
    rom: "64 GB",
    giaBan: 7600000,
    hinhAnh: "./img/img/meizuphone.jpg",
  },
  {
    maSP: 3,
    tenSP: "Iphone XS Max",
    manHinh: "OLED, 6.5, 1242 x 2688 Pixels",
    heDieuHanh: "iOS 12",
    cameraSau: "Chính 12 MP & Phụ 12 MP",
    cameraTruoc: "7 MP",
    ram: "4 GB",
    rom: "64 GB",
    giaBan: 27000000,
    hinhAnh: "./img/img/applephone.jpg",
  },
];

export default class ProductDetail extends Component {
  renderPhone = () => {
    let arrPhone = dataPhone.map((item) => {
      return (
        <div className="col-4 mt-2" key={item.maSP}>
          <Detail
            ThemGioHang={this.themGioHang}
            phone={item}
            xemChiTiet={this.xemChiTiet}
          ></Detail>
        </div>
      );
    });
    return arrPhone;
  };
  state = {
    spChiTiet: {
      maSP: 1,
      tenSP: "VinSmart Live",
      manHinh: "AMOLED, 6.2, Full HD+",
      heDieuHanh: "Android 9.0 (Pie)",
      cameraTruoc: "20 MP",
      cameraSau: "Chính 48 MP & Phụ 8 MP, 5 MP",
      ram: "4 GB",
      rom: "64 GB",
      giaBan: 5700000,
      hinhAnh: "./img/img/vsphone.jpg",
    },
    arrGioHang: [
      {
        maSP: 1,
        tenSP: "VinSmart Live",
        giaBan: 5700000,
        hinhAnh: "./img/img/vsphone.jpg",
        soLuong: 2,
      },
    ],
  };
  /*  STATE ĐẶT Ở COMPONENT NÀO THÌ HÀM setState viết ở compunent đó */
  themGioHang = (spClick) => {
    // console.log(spClick)
    spClick = { ...spClick, soLuong: 1 };

    // kiểm tra sản phẩm đã có trong giỏ hàng hay chưa? Nếu có rồi thì lấy ra tăng số lượng. Chưa có thì lấy ra push vào
    let gioHang = this.state.arrGioHang;
    let spGH = gioHang.find((item) => item.maSP === spClick.maSP);
    if (spGH) {
      spGH.soLuong += 1;
    } else {
      gioHang.push(spClick);
    }

    // Thêm sản phẩm vô giỏ hàng
    // this.state.arrGioHang.push(spClick);
    // Gán lại state = sttate mới
    this.setState({
      arrGioHang: gioHang,
    });
  };
  // delete
  xoaSanPham = (maSP) => {
    console.log(maSP);
    let index = this.state.arrGioHang.findIndex((item) => item.maSP === maSP);
    if (index !== -1) {
      this.state.arrGioHang.splice(index, 1);
    }
    this.setState({
      arrGioHang: this.state.arrGioHang,
    });
  };
  tangGiamSL = (maSP,SL) => {
    console.log(maSP,SL);
    // tìm ra sản phẩm được click dựa vào mã
    let SP = this.state.arrGioHang.find((item) => item.maSP === maSP);
    if(SP) {
      SP.soLuong += SL;
      if(SP.soLuong < 1) {
        if(window.confirm('DCMMM M NGU VÃI LÀM MẸ GÌ MUA RỒI MÀ CÒN CHO NÓ VỀ 0???')){
          this.xoaSanPham(SP.maSP);
        }
        else {
          SP.soLuong -= SL;
        }
      }
    }
    // cập nhật state
    this.setState({
      arrGioHang: this.state.arrGioHang
    })
  }
  xemChiTiet = (spClick) => {
    //   console.log(spClick)
    this.setState({
      spChiTiet: spClick,
    });
  };
  render() {
    let {
      maSP,
      tenSP,
      manHinh,
      heDieuHanh,
      cameraTruoc,
      cameraSau,
      ram,
      rom,
      giaBan,
      hinhAnh,
    } = this.state.spChiTiet;
    return (
      <div className="container">
        <h3>Danh sách sản phẩm</h3>
        <Card
          xoaSanPham={this.xoaSanPham}
          tangGiamSL={this.tangGiamSL}
          arrGioHang={this.state.arrGioHang}
        ></Card>
        <div className="row">
          {this.renderPhone()}
          {/* <div className="col-4 mt-2">
            <div className="card">
              <img src="./img/img/applephone.jpg" alt="..." height={"100%"} />
              <div className="card-body">
                <h3>Product name</h3>
                <p>price</p>
                <button className="btn btn-successs">Xem chi tiet</button>
              </div>
            </div>
          </div> */}
          {/* <div className="col-4 mt-2">
            <div className="card">
              <img src="../img/img/applephone.jpg" alt="..." height={"100%"} />
              <div className="card-body">
                <h3>Product name</h3>
                <p>price</p>
                <button className="btn btn-successs">Xem chi tiet</button>
              </div>
            </div>
          </div>
          <div className="col-4 mt-2">
            <div className="card">
              <img src="./img/img/applephone.jpg" alt="..." height={"100%"} />
              <div className="card-body">
                <h3>Product name</h3>
                <p>price</p>
                <button className="btn btn-successs">Xem chi tiet</button>
              </div>
            </div>
          </div> */}
        </div>
        <hr />
        <hr />
        <div className="row" style={{ minHeight: 400 }}>
          <div className="col-3">
            <h3 className="text-center">{tenSP}</h3>
            <img src={hinhAnh} alt="" className="w-100" />
          </div>
          <div className="col-9">
            <h3>Thong so ki thuat</h3>
            <table className="table">
              <thead>
                <tr>
                  <th>Man hinh</th>
                  <td>{manHinh}</td>
                </tr>
                <tr>
                  <th>He Dieu Hanh</th>
                  <td>{heDieuHanh}</td>
                </tr>
                <tr>
                  <th>Camera Truoc</th>
                  <td>{cameraTruoc}</td>
                </tr>
                <tr>
                  <th>Camera Sau</th>
                  <td>{cameraSau}</td>
                </tr>
                <tr>
                  <th>Ram</th>
                  <td>{ram}</td>
                </tr>
                <tr>
                  <th>Rom</th>
                  <td>{rom}</td>
                </tr>
              </thead>
            </table>
          </div>
        </div>
      </div>
    );
  }
}
