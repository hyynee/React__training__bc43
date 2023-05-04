import React, { Component } from "react";
import CreateProduct from "./CreateProduct";

export default class ReactFormDemo extends Component {
  state = {
    arrProduct: [
      {
        idProduct: "01",
        name: "Iphone X",
        price: 1000,
        typeForm: "Phone",
        img: "https://i.pravatar.cc?u=1",
        desc: "Điện thoại iphonex",
      },
      {
        idProduct: "02",
        name: "Iphone 13",
        price: 2000,
        typeForm: "Phone",
        img: "https://i.pravatar.cc?u=1",
        desc: "Điện thoại iphone13",
      },
      {
        idProduct: "03",
        name: "Iphone 15",
        price: 5000,
        typeForm: "Phone",
        img: "https://i.pravatar.cc?u=1",
        desc: "Điện thoại iphone15",
      },
    ],
    productEdit: {
      idProduct: "",
      name: "",
      price: "",
      typeForm: "",
      img: "",
      desc: "",
    },
  };

  addProduct = (prodInfo) => {
    // console.log(prodInfo);
    this.state.arrProduct.push(prodInfo);
    this.setState({
      arrProduct: this.state.arrProduct,
    });
  };
  delProduct = (idProductDel) => {
    console.log(idProductDel);
    let indexDel = this.state.arrProduct.findIndex(
      (prod) => prod.idProduct === idProductDel
    );
    if (indexDel !== -1) {
      this.state.arrProduct.splice(indexDel, 1);
    }
    // làm gì cũng phải xét this.setState
    this.setState({
      arrProduct: this.state.arrProduct,
    });
  };
  upDateProduct = (newProduct) => {
    let prod = this.state.arrProduct.find(
      (prod) => prod.idProduct === newProduct.idProduct
    );
    if (prod) {
      for (let key in prod) {
        prod[key] = newProduct[key];
      }
    }
    // xét State sau khi cập nhật
    this.setState({
      arrProduct: this.state.arrProduct,
    });
  };
  render() {
    return (
      <div className="container">
        <CreateProduct
          productEdit={this.state.productEdit}
          addProduct={this.addProduct}
          Update={this.upDateProduct}
        ></CreateProduct>
        <table className="table">
          <thead className="bg-dark text-white fw-bold">
            <tr>
              <th>ID</th>
              <th>NAME</th>
              <th>IMG</th>
              <th>PRICE</th>
              <th>TYPE</th>
              <th>DECS</th>
            </tr>
          </thead>
          <tbody>
            {this.state.arrProduct.map((prod) => {
              return (
                <tr key={prod.idProduct}>
                  <td>{prod.idProduct}</td>
                  <td>{prod.name}</td>
                  <td>
                    <img
                      src={prod.img}
                      width={50}
                      height={50}
                      alt={prod.name}
                    ></img>
                  </td>
                  <td>{prod.price}</td>
                  <td>{prod.typeForm}</td>
                  <td>{prod.desc}</td>
                  <td>
                    <button
                      className="btn btn-primary mx-2"
                      onClick={() => {
                        this.setState({
                          productEdit: prod,
                        });
                      }}
                    >
                      Edit
                    </button>
                    <button
                      className="btn btn-danger mx-2"
                      onClick={() => {
                        this.delProduct(prod.idProduct);
                      }}
                    >
                      DELETE
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}
