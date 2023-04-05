import React, { Component } from 'react'

export default class Demologin extends Component {
    // state: là thuộc tính của component để quản lý các biến thay đổi trên giao diện của 1 component
    state = {
        result: 'default value'
    }

    handleSubmit = (event) => {
        event.preventDefault();
        // alert('thành công');
        // dùng document..được nhưng mang nhiều rủi ro do các trang khác có thể bị trùng id dẫn đến thay đổi theo
        // this.state.result = ' đăng nhập thành công';
        // Không được thay đổi state trực tiếp vì giao diện sẽ không render lại
       let newState = {
        result:' đăng nhập thành công!!'
       }
       /* this.setState: là phương thức có sẵn của component. Dùng để thay đổi giá trị của state, đồng thời làm giao diện render lại với giá trị state mới */
       this.setState(newState);
    }
  render() {
    return (
      <div className='container'>
        <form className='card w-25 mx-auto' onSubmit={this.handleSubmit}>
            <div className="card-header bg-dark text-white text-center">Login</div>
                <div className="card-body">
                    <p>Username</p>
                    <input className='form-control' type="text" id='username' />
                    <p>Password</p>
                    <input className='form-control' type="password" id='password' />
                </div>
                <div className="card-footer text-center">
        <button type='submit' className='btn btn-success'>Login</button>
                </div>
        </form>
        <div className="alert alert-success w-25 mx-auto" id='result'>
            {this.state.result}
        </div>
      </div>
    )
  }
}
