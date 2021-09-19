import * as Types from "../constants/ActionTypes";
import callAPI from "../utils/apiCaller";
export const actFetchProducts = (products) => {
  return {
    type: Types.FETCH_PRODUCTS,
    products,
  };
};
export const actFetchProductsRequest = () => {
  return (dispatch) => {
    return callAPI(`products`, "GET", null).then((res) => {
      dispatch(actFetchProducts(res.data));
    });
  };
};
export const actDeleteProducts = (id) => {
  return {
    type: Types.DELETE_PRODUCT,
    id,
  };
};
export const actDeleteProductsRequest = (id) => {
  return (dispatch) => {
    return callAPI(`products/${id}`, "delete", null).then((res) => {
      dispatch(actDeleteProducts(id));
    });
  };
};
//ADD PRODUCT
export const actAddProduct = (product) => {
  return {
    type: Types.ADD_PRODUCT,
    product,
  };
};
export const actAddProductRequest = (product) => {
  return (dispatch) => {
    return callAPI(`products`, "post", product).then((res) => {
      dispatch(actAddProduct(res.data));
    });
  };
};
//EDIT PRODUCT
export const actGetProduct = (product) => {
  return {
    type: Types.EDIT_PRODUCT,
    product,
  };
};
export const actGetProductRequest = (id) => {
  return (dispatch) => {
    return callAPI(`products/${id}`, "get", null).then((res) => {
      dispatch(actGetProduct(res.data));
    });
  };
};
//UPDATE PRODUCT
export const actUpdateProduct = (product) => {
  return {
    type: Types.UPDATE_PRODUCT,
    product,
  };
};
export const actUpdateProductRequest = (product) => {
  return (dispatch) => {
    return callAPI(`products/${product.id}`, "put", product).then((res) => {
      dispatch(actGetProduct(res.data));
    });
  };
};
