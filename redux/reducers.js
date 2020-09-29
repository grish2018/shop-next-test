import { combineReducers } from "redux";
import {
  END__LOADING,
  FETCH__CURRENT__PRODUCT,
  FETCH__DATA,
  START__LOADING,
} from "./types";

const initialProductsState = {
  products: [],
  currentProduct: {},
  loading: false,
};
const productsreducer = (state = initialProductsState, action) => {
  switch (action.type) {
    case FETCH__DATA:
      return { ...state, products: action.payload };
    case FETCH__CURRENT__PRODUCT:
      return { ...state, currentProduct: action.payload };
    case START__LOADING:
      return { ...state, loading: true };
    case END__LOADING:
      return { ...state, loading: false };
    default:
      return state;
  }
};

const reducers = { products: productsreducer };

export default combineReducers(reducers);
