import {
  ADD_TO_CART,
  REMOVE_CART_ITEM,
  EMPTY_CART_ITEMS,
} from "../constants/cartConstants";
import axios from "axios";

// Add to Cart
export const addItemsToCart = (id, quantity) => async (dispatch, getState) => {
  const { data } = await axios.get(`/api/v1/product/${id}`);
  dispatch({
    type: ADD_TO_CART,
    payload: {
      product: data.product._id,
      name: data.product.name,
      price: data.product.price,
      image: data.product.image,
      stock: data.product.quantity,
      quantity,
    },
  });

  localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems));
};

// REMOVE FROM CART
export const removeItemsFromCart = (id) => async (dispatch, getState) => {
  dispatch({
    type: REMOVE_CART_ITEM,
    payload: id,
  });

  localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems));
};

// EMPTY CART
export const emptyItemsFromCart = () => async (dispatch, getState) => {
  dispatch({
    type: EMPTY_CART_ITEMS,
    payload: [],
  });

  localStorage.setItem("cartItems", []);
};

