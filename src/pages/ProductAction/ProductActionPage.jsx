import React, { Component } from "react";
import "./ProductActionPage.css";
import callAPI from "../../utils/apiCaller";
import { connect } from "react-redux";
import {
  actAddProductRequest,
  actGetProductRequest,
  actUpdateProductRequest,
} from "../../actions/index";
class ProductActionPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      txtName: "",
      txtPrice: "",
      checkStatus: false,
    };
  }

  onSave = (e) => {
    e.preventDefault();
    var { id, txtName, txtPrice, checkStatus } = this.state;
    var { history } = this.props;
    var product = {
      id: id,
      name: txtName,
      price: txtPrice,
      status: checkStatus,
    };
    if (id) {
      //Tồn tại => cập nhật lại
      // callAPI(`products/${id}`, "PUT", {
      //   name: txtName,
      //   price: txtPrice,
      //   status: checkStatus,
      // }).then((res) => {
      //   history.goBack();
      // });
      this.props.onUpdateProduct(product);
    } else {
      // Không tồn tại => thêm mới
      // callAPI("products", "post", {
      //   name: txtName,
      //   price: txtPrice,
      //   status: checkStatus,
      // }).then((res) => {
      //   history.goBack();
      // });
      this.props.onAddProduct(product);
    }
    history.goBack();
  };
  onChange = (e) => {
    var target = e.target;
    var name = target.name;
    var value = target.type === "checkbox" ? target.checked : target.value;
    this.setState({
      [name]: value,
    });
  };
  componentDidMount() {
    // load data theo id khi bấm sửa
    var { match } = this.props;
    if (match) {
      var id = match.params.id;
      // callAPI(`products/${id}`, "get", null).then((res) => {
      //   var data = res.data;
      //   this.setState({
      //     id: data.id,
      //     txtName: data.name,
      //     txtPrice: data.price,
      //     checkStatus: data.status,
      //   });
      // });
      this.props.onEditProduct(id);
    }
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps && nextProps.itemEditing) {
      var { itemEditing } = nextProps;
      this.setState({
        id: itemEditing.id,
        txtName: itemEditing.name,
        txtPrice: itemEditing.price,
        checkStatus: itemEditing.status,
      });
    }
  }
  render() {
    var { txtName, txtPrice, checkStatus } = this.state;
    return (
      <div className="container">
        <div className="row ">
          <div className="col-6 ">
            <form className="mt-20" onSubmit={this.onSave}>
              <div className="mb-3">
                <label className="form-label">Tên sản phẩm</label>
                <input
                  type="text"
                  className="form-control"
                  name="txtName"
                  value={txtName}
                  onChange={this.onChange}
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Giá</label>
                <input
                  type="text"
                  className="form-control"
                  name="txtPrice"
                  value={txtPrice}
                  onChange={this.onChange}
                />
              </div>
              <div className="mb-3 form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="exampleCheck1"
                  name="checkStatus"
                  value={checkStatus}
                  onChange={this.onChange}
                  checked={checkStatus}
                />
                <label className="form-check-label" htmlFor="exampleCheck1">
                  Còn hàng
                </label>
              </div>
              <button type="submit" className="btn btn-primary">
                Lưu lại
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    itemEditing: state.itemEditing,
  };
};
const mapDispatchToProps = (dispatch, props) => {
  return {
    onAddProduct: (product) => {
      dispatch(actAddProductRequest(product));
      //dispatch từ action/index => sử dụng middleware (redux-thunk)
    },
    onEditProduct: (id) => {
      dispatch(actGetProductRequest(id));
      //dispatch từ action/index => sử dụng middleware (redux-thunk)
    },
    onUpdateProduct: (product) => {
      dispatch(actUpdateProductRequest(product));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(ProductActionPage);
