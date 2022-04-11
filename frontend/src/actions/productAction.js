import axios from "axios";

import {
  ALL_PRODUCT_FAIL,
  ALL_PRODUCT_REQUEST,
  ALL_PRODUCT_SUCCESS,
  NEW_PRODUCT_REQUEST,
  NEW_PRODUCT_SUCCESS,
  NEW_PRODUCT_RESET,
  NEW_PRODUCT_FAIL,
  CLEAR_ERRORS,
} from "../constants/productConstants";

// Get All Products
export const getProduct =
  () =>
    async (dispatch) => {
      try {
        dispatch({ type: ALL_PRODUCT_REQUEST });

        let link = `/api/v1/products`;

        const { data } = await axios.get(link);

        dispatch({
          type: ALL_PRODUCT_SUCCESS,
          payload: data,
        });
      } catch (error) {
        dispatch({
          type: ALL_PRODUCT_FAIL,
          payload: error.response.data.message,
        });
      }
    };

// Create Product
export const createProduct = (productData) => async (dispatch) => {

  try {
    dispatch({ type: NEW_PRODUCT_REQUEST });

    const config = {
      headers: { "Content-Type": "application/json" },
    };

    const { data } = await axios.post(
      `/api/v1/product/new`,
      productData,
      config
    );

    dispatch({
      type: NEW_PRODUCT_SUCCESS,
      payload: data,
    });

  } catch (error) {
    dispatch({
      type: NEW_PRODUCT_FAIL,
      payload: error.response && error.response.data.message
        ? error.response.data.message
        : error.message,
    });
  }
};


// Clearing Errors
export const clearErrors = () => async (dispatch) => {
  dispatch({ type: CLEAR_ERRORS });
};
