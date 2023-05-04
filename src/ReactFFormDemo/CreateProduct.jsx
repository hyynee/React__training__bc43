import React, { Component } from "react";

export default class CreateProduct extends Component {
  state = {
    values: {
      idProduct: "",
      name: "",
      price: "",
      img: "",
      typeForm: "Phone",
      desc: "",
    },
    errors: {
      idProduct: "(*)",
      name: "(*)",
      price: "(*)",
      img: "(*)",
      desc: "(*)",
    },
  };

  handleSubmit = (event) => {
    event.preventDefault();
    // kiểm tra nếu this.state.values hợp lệ thì ms addProduct
    // duyệt this.state.errors
    for (let key in this.state.errors) {
      if (this.state.errors[key] !== "") {
        alert("Dữ liệu nhập vào chưa hợp lệ!!!");
        return;
      }
    }
    // call api....
    // console.log(this.state.values);
    let { addProduct } = this.props;
    // check validation trước khi thêm
    addProduct(this.state.values);
  };
  handleChangeInput = (event) => {
    let { value, id } = event.target; // event.target chính là thẻ input đang diễn ra sự kiện oninput
    let dataType = event.target.getAttribute("data-type");
    let minLength = event.target.getAttribute("data-minlength");
    let maxLength = event.target.getAttribute("data-maxlength");
    // this.setState(
    //   {
    //     [id]: value,
    //   },
    //   () => {
    //     console.log(this.state);
    //   }
    // );
    /*
     */
    // xử lý this.state.values
    let newValue = { ...this.state.values };
    newValue[id] = value;
    // xử lý errors
    let newError = { ...this.state.errors };
    let messError = "";
    if (value.trim() === "") {
      messError = id + " không được bỏ trống";
    } else {
      if (dataType) {
        switch (dataType) {
          case "number": {
            let regexNumber = /^-?\d*\.?\d+$/;
            if (!regexNumber.test(value)) {
              messError = id + " phải là số";
            }
            break;
          }
          case "string": {
            let regexString = /^[a-z A-Z0-9]+$/;
            if (!regexString.test(value)) {
              messError = id + " phải là kí tự!!!";
            }
            break;
          }
        }
      }
      if (minLength) {
        if (value.length < minLength) {
          messError = id + " không được dưới " + minLength + " ký tự!!!";
        }
      }
      if (maxLength) {
        if (value.length > maxLength) {
          messError = id + " không được hơn " + maxLength + " ký tự!!!";
        }
      }
    }
    newError[id] = messError;
    this.setState(
      {
        values: newValue,
        errors: newError,
      },
      () => {
        // console.log(this.state);
      }
    );
  };

  // can thiệp trước khi props mới truyền vào và render ra giao diện thì đem props gắn vào state
  // static getDerivedStateFromProps(newProps, currentState) {
  //   if (newProps.productEdit.idProduct !== currentState.values.idProduct) {
  //     // bấm sửa
  //     currentState.values = { ...newProps.productEdit };
  //     return currentState;
  //   }
  //   return null;
  // }

// chỉ chạy khi props thay đổi và trước khi render
  componentWillReceiveProps(newProps) {
    this.setState({
      values: newProps.productEdit
    })
  }
  render() {
    let { idProduct, name, price, img, typeForm, desc } = this.state.values;
    return (
      <form className="card" onSubmit={this.handleSubmit}>
        <div className="card-header bg-dark text-white">PRODUCT INFO</div>
        <div className="card-body">
          <div className="row">
            <div className="col-6">
              <div className="form-group">
                <p>ID</p>
                <input
                  data-type="number"
                  data-minlength="2"
                  data-maxlength="20"
                  type="text"
                  className="form-control"
                  id="idProduct"
                  name="idProduct"
                  // value={this.state.idProduct}
                  value={idProduct}
                  onInput={this.handleChangeInput}
                  //   (event) => {
                  //   let {value,id} = event.target; // event.target chính là thẻ input đang diễn ra sự kiên input
                  //   this.setState({
                  //   [id]: value
                  //   },() => {
                  //     console.log(this.state)
                  //   })
                  // }
                />
                <span className="text text-danger">
                  {this.state.errors.idProduct}
                </span>
              </div>
              <div className="form-group">
                <p>NAME</p>
                <input
                  data-type="string"
                  type="text"
                  className="form-control"
                  id="name"
                  name="name"
                  // value={this.state.name}
                  value={name}
                  onInput={this.handleChangeInput}
                />
                <span className="text text-danger">
                  {this.state.errors.name}
                </span>
              </div>
              <div className="form-group">
                <p>PRICE</p>
                <input
                  data-type="number"
                  type="text"
                  className="form-control"
                  id="price"
                  name="price"
                  // value={this.state.price}
                  value={price}
                  onInput={this.handleChangeInput}
                />
                <span className="text text-danger">
                  {this.state.errors.price}
                </span>
              </div>
            </div>
            <div className="col-6">
              <div className="form-group">
                <p>IMG</p>
                <input
                  type="text"
                  className="form-control"
                  id="img"
                  name="img"
                  value={img}
                  onInput={this.handleChangeInput}
                />
                <span className="text text-danger">
                  {this.state.errors.img}
                </span>
              </div>
              <div className="form-group">
                <p>TYPE</p>
                <select
                  className="form-control"
                  id="typeForm"
                  name="type"
                  value={typeForm}
                  onInput={this.handleChangeInput}
                >
                  <option value="Phone">Phone</option>
                  <option value="Tablet">Tablet</option>
                  <option value="Laptop">Laptop</option>
                </select>
              </div>
              <div className="form-group">
                <p>DESC</p>
                <input
                  data-minlength="6"
                  data-maxlength="32"
                  type="text"
                  className="form-control"
                  id="desc"
                  name="desc"
                  value={desc}
                  onInput={this.handleChangeInput}
                />
                <span className="text text-danger">
                  {this.state.errors.desc}
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="card-footer">
          <button type="submit" className="btn btn-success">
            Create
          </button>
          <button type="button" className="btn btn-dark text-white mx-2" onClick={() => {
            // lấy hàm update state từ component cha truyền vào 
            let {Update} = this.props;
            // gửi ra dữ liệu sau khi thay đổi product
            Update({...this.state.values})
          }}>Update</button>
        </div>
      </form>
    );
  }
}
