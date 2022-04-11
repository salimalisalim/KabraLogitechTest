import React, { Fragment, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addItemsToCart, removeItemsFromCart } from "../actions/cartAction";
import { Link } from "react-router-dom";
import "./Cart.css"

const Cart = () => {

    const dispatch = useDispatch();

    const { cartItems } = useSelector((state) => state.cart);


    const increaseQuantity = (id, quantity, stock) => {
        const newQty = quantity + 1;
        if (stock <= quantity) {
            return;
        }
        dispatch(addItemsToCart(id, newQty));
    };

    const decreaseQuantity = (id, quantity) => {
        const newQty = quantity - 1;
        if (1 >= quantity) {
            return;
        }
        dispatch(addItemsToCart(id, newQty));
    };

    const deleteCartItems = (id) => {
        dispatch(removeItemsFromCart(id));
    };

    return (
        <Fragment>
            <div className="breadcrumbs">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-md-6 col-12">
                            <div className="breadcrumbs-content">
                                <h1 className="page-title">Products Cart</h1>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-12">
                            <ul className="breadcrumb-nav">
                                <li><Link to="/"><i className="lni lni-home"></i> Home</Link></li>

                                <li>Cart</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>


            {cartItems.length === 0 ? (
                <div className="emptyCart">
                    <div className="shopping-cart section">
                        <div className="container">
                            <div className="d-flex justify-content-center align-self-center">
                                <div className="emptyCart">
                                    <i className=" lni lni-close size-empty-cart "></i>
                                    <h5 className="my-2">No Product in Your Cart</h5>
                                    <Link to="/" >View Products</Link>
                                </div>
                            </div>
                        </div>
                    </div>


                </div>
            ) : (
                <Fragment>
                    <div>
                        <div className="shopping-cart section">
                            <div className="container">
                                <div className="cart-list-head">

                                    <div className="cart-list-title">
                                        <div className="row">
                                            <div className="col-lg-1 col-md-1 col-12">
                                            </div>
                                            <div className="col-lg-4 col-md-3 col-12">
                                                <p>Product Name</p>
                                            </div>
                                            <div className="col-lg-2 col-md-2 col-12">
                                                <p>Quantity</p>
                                            </div>
                                            <div className="col-lg-2 col-md-2 col-12">
                                                <p>Subtotal</p>
                                            </div>

                                            <div className="col-lg-1 col-md-2 col-12">
                                                <p>Remove</p>
                                            </div>
                                        </div>
                                    </div>


                                    {cartItems &&
                                        cartItems.map((item) => (
                                            <div className="cart-single-list" key={item.product}>
                                                <div className="row align-items-center">
                                                    <div className="col-lg-1 col-md-1 col-12">
                                                        <Link to={`/product/${item.product}`}><img src={item.image} alt={item.name} /></Link>
                                                    </div>
                                                    <div className="col-lg-4 col-md-3 col-12">
                                                        <p className="product-name">
                                                            {item.name}</p>

                                                    </div>
                                                    <div className="col-lg-2 col-md-2 col-12">
                                                        <div className="count-input">
                                                            <div className="cartInput">
                                                                <button
                                                                    onClick={() =>
                                                                        decreaseQuantity(item.product, item.quantity)
                                                                    }
                                                                >
                                                                    -
                                                                </button>
                                                                <input type="number" value={item.quantity} readOnly />
                                                                <button
                                                                    onClick={() =>
                                                                        increaseQuantity(
                                                                            item.product,
                                                                            item.quantity,
                                                                            item.stock
                                                                        )
                                                                    }
                                                                >
                                                                    +
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-2 col-md-2 col-12">
                                                        {`₹${item.price * item.quantity
                                                            }`}
                                                    </div>

                                                    <div className="col-lg-1 col-md-2 col-12">
                                                        <span className="remove-item" onClick={() => deleteCartItems(item.product)}>
                                                            <i className="lni lni-close"></i>
                                                        </span>

                                                    </div>
                                                </div>
                                            </div>
                                        ))
                                    }

                                </div>
                                <div className="row">
                                    <div className="col-12">

                                        <div className="total-amount">
                                            <div className="row">
                                                <div className="col-lg-8 col-md-6 col-12">
                                                    <div className="left">
                                                        <div className="coupon">

                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-4 col-md-6 col-12">
                                                    <div className="right">
                                                        <ul>
                                                            <li>Cart Subtotal<span>Gross</span></li>


                                                            <li className="last">You Pay<span> {cartItems.reduce(
                                                                (acc, item) => acc + item.quantity * item.price,
                                                                0)} </span></li>
                                                        </ul>
                                                        <div className="button">
                                                            <span className="btn">Checkout</span>
                                                            <Link to="/" className="btn btn-alt">Continue shopping</Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>



                    </div >

                </Fragment >
            )
            }
        </Fragment >
    )
}

export default Cart