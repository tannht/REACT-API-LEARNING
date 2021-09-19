import React, { Component } from "react";
import "./ProductItem.scss";
import { Link } from "react-router-dom";
class ProductItem extends Component {
  onDelete = (id) => {
    if (confirm("Bạn có muốn xóa?")){//eslint-disable-line      
      this.props.onDelete(id);
    }
  };
  render() {
    var { product, index } = this.props;
    var statusName = product.status ? "Còn hàng" : "Hết hàng";
    return (
      <tr>
        <td>{index + 1}</td>
        <td>{product.id}</td>
        <td>{product.name}</td>
        <td>{product.price}$</td>
        <td>{statusName}</td>
        <td>
          <Link
            to={`/products/${product.id}/edit`}
            className="btn btn-success mr-15"
          >
            Sửa
          </Link>
          <button
            type="button"
            className="btn btn-danger"
            onClick={() => this.onDelete(product.id)}
          >
            Xóa
          </button>
        </td>
      </tr>
    );
  }
}

export default ProductItem;
