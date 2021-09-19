import React, { Component } from "react";
import ProductList from "../../components/ProductList/ProductList";
import ProductItem from "../../components/ProductItem/ProductItem";
import { connect } from "react-redux";
import callAPI from "../../utils/apiCaller";
import { Link } from "react-router-dom";
import {
  actFetchProductsRequest,
  actDeleteProductsRequest,
} from "../../actions/index";
class Products extends Component {
  componentDidMount() {
    callAPI("products", "get", null).then((res) => {
      // this.setState({
      //   products: res.data,
      // });
      this.props.fetchAllProducts();
    });
  }
  onDelete = (id) => {
    this.props.onDelete(id);
  };
  findIndex = (products, id) => {
    var results = null;
    products.forEach((product, index) => {
      if (product.id === id) {
        results = index;
      }
    });
    return results;
  };
  render() {
    var { products } = this.props;
    return (
      <div className="container">
        <div className="row">
          <div className="col">
            <br />
            <Link to="/products/add" className="btn btn-primary">
              Add product
            </Link>
            <hr />
            <ProductList>{this.showProduct(products)}</ProductList>
          </div>
        </div>
      </div>
    );
  }
  showProduct(products) {
    var results = null;
    if (products.length > 0) {
      results = products.map((product, index) => {
        return (
          <ProductItem
            key={index}
            product={product}
            index={index}
            onDelete={this.onDelete}
          />
        );
      });
    }
    return results;
  }
}
const mapStateToProps = (state) => {
  return {
    products: state.products,
  };
};
const mapDispatchToProps = (dispatch, props) => {
  return {
    fetchAllProducts: () => {
      dispatch(actFetchProductsRequest());
      //dispatch từ action/index => sử dụng middleware (redux-thunk)
    },
    onDelete: (id) => {
      dispatch(actDeleteProductsRequest(id));
      //dispatch từ action/index => sử dụng middleware (redux-thunk)
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Products);
