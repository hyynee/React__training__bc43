import React, { Component } from "react";

export default class RenderWithMap extends Component {
  products = [
    { id: 1, name: "red car", price: 1000, img: "./img/products/red-car.jpg" },
    {
      id: 2,
      name: "silver car",
      price: 1000,
      img: "./img/products/silver-car.jpg",
    },
    {
      id: 3,
      name: "black car",
      price: 1000,
      img: "./img/products/black-car.jpg",
    },
    {
      id: 4,
      name: "steel car",
      price: 1000,
      img: "./img/products/steel-car.jpg",
    },
  ];

  /* cách 1
  renderProduct = () => {
    let outPut = []; // mảng các thẻ tr dựa trên dữ liệu của thẻ this.products
    for(let prod of this.products) {
        // mỗi lần duyệt qua 1 object thì tạo ra jsx tr
        let jsxTr = 
        <tr key={prod.id}>
            <td>{prod.id}</td>
            <td>{prod.name}</td>
            <td>{prod.price}</td>
            <td>
                <img src={prod.img} alt="" style={{height:50}} />
            </td>
        </tr>;
        // Đưa jsx tr vào mảng output
        outPut.push(jsxTr);
        console.log(outPut);
    }
    return outPut;  //[<tr></tr>,<tr></tr>,<tr></tr>,<tr></tr>]
  }
 */
  /* cách 2 */
  renderMapTr = () => {
    let arrJSXTr = this.products.map((prod) => {
      return (
        <tr key={prod.id}>
          <td>{prod.id}</td>
          <td>{prod.name}</td>
          <td>{prod.price}</td>
          <td>
            <img src={prod.img} alt="" style={{ height: 100 }} />
          </td>
        </tr>
      );
    });
    return arrJSXTr;
  };
  renderCardProduct = () => {
    return this.products.map((prod) => {
      const { id, name, price, img } = prod;
      return (
        <div key={id} className="col-6">
          <div className="card">
            <div className="card-body">
              <p>id: {id}</p>
              <p>name: {name}</p>
              <p>price: {price}</p>
            </div>
            <div className="card-footer">
              <img src={img} alt="" style={{ height: 100}} />
            </div>
          </div>
        </div>
      );
    });
  };
  render() {
    return (
      <div className="container">
        <h3>Danh sach san pham</h3>
        <table className="table">
          <thead>
            <tr>
              <th>ID</th>
              <th>NAME</th>
              <th>PRICE</th>
              <th>IMG</th>
            </tr>
          </thead>
          <tbody>
            {this.renderMapTr()}
            {/* <td>{this.products[0].id}</td>
            <td>{this.products[0].name}</td>
            <td>{this.products[0].price}</td>
            <tr>
              <img src={this.products[0].img} alt="" style={{width:50}}/>
            </tr> */}
          </tbody>
        </table>
        <hr />
        <h3 className="text-center">Product list</h3>
        <div class="row">{this.renderCardProduct()}</div>
      </div>
    );
  }
}
