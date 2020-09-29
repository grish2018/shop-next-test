import axios from "axios";
import {
  END__LOADING,
  FETCH__CURRENT__PRODUCT,
  FETCH__DATA,
  START__LOADING,
} from "./types";

export function fetchProducts(page) {
  return async (dispatch) => {
    try {
      dispatch({
        type: START__LOADING,
      });
      const { data } = await axios.get(`http://localhost:3001/product?page=1`);
      dispatch({
        type: FETCH__DATA,
        payload: data.data,
      });
      dispatch({
        type: END__LOADING,
      });
    } catch (e) {
      console.log(e);
    }
  };
}
export function fetchCurrentProduct(id) {
  return async (dispatch) => {
    try {
      dispatch({
        type: START__LOADING,
      });
      const { data } = await axios.get(`http://localhost:3001/product/${id}`);
      console.log(data);
      dispatch({
        type: FETCH__CURRENT__PRODUCT,
        payload: data,
      });
      dispatch({
        type: END__LOADING,
      });
    } catch (e) {
      console.log(e);
    }
  };
}
