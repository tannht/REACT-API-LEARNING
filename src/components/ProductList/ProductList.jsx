import React, { Component } from 'react';

class ProductList extends Component {
    render() {
        return (
            <div>
                <h3>DANH SÁCH SẢN PHẨM</h3>
              <table className="table table-striped table-inverse table-responsive">
                <thead className="thead-inverse">
                  <tr>
                    <th>STT</th>
                    <th>Mã</th>
                    <th>Tên</th>
                    <th>Giá</th>
                    <th>Trạng thái</th>

                    <th>Hành động</th>
                  </tr>
                </thead>
                <tbody>
                  {this.props.children}
                  
                </tbody>
              </table>
            </div>
        );
    }
}

export default ProductList;