import React from 'react'
import { Link } from "react-router-dom";
import "./Header.css"
import LineIcon from "react-lineicons";
import { useDispatch, useSelector } from 'react-redux';
import { removeItemsFromCart } from "../../actions/cartAction";

const Header = () => {

    const dispatch = useDispatch();
    const { cartItems } = useSelector((state) => state.cart);

    let cartItemCount = cartItems.length;
    let lastTwoCartItems = cartItems.slice(-2).reverse()

    const deleteCartItems = (id) => {
        dispatch(removeItemsFromCart(id));
    };

    return (


        <header className="header navbar-area">

            <div className="topbar">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-4 col-md-4 col-12">
                            <h6 className='text-white'>Kabra Logitech</h6>
                        </div>
                        <div className="col-lg-4 col-md-4 col-12">
                            <div className="top-middle">
                                <ul className="useful-links">
                                    <li><Link to="/">Home</Link></li>
                                    <li><Link to="/product/new">Create Product</Link></li>
                                    <li><Link to="/cart">Cart</Link></li>

                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-12">
                            <div className="top-end">
                                <div className="navbar-cart">

                                    <div className="cart-items">
                                        <button href="#" className="main-btn">
                                            <LineIcon name="cart" />

                                            <span className="total-items">{cartItemCount}</span>
                                        </button>
                                        {cartItemCount > 0 && (
                                            <div className="shopping-item">
                                                <div className="dropdown-cart-header">
                                                    <span>{cartItemCount} Item(s)</span>
                                                    <Link to="/cart">View Cart</Link>
                                                </div>
                                                <ul className="shopping-list">
                                                    {
                                                        lastTwoCartItems.map((item) => (

                                                            <li key={item.product}>
                                                                <span className="remove" onClick={() => deleteCartItems(item.product)} title="Remove this item"><i
                                                                    className="lni lni-close"></i></span>
                                                                <div className="cart-img-head">
                                                                    <Link className="cart-img" to={`/product/${item.product}`}><img
                                                                        src={item.image} alt="#" /></Link>
                                                                </div>

                                                                <div className="content">
                                                                    <h4><Link to={`/product/${item.product}`}>
                                                                        {item.name}</Link></h4>
                                                                    <p className="quantity">{item.quantity} x  <span className="amount">
                                                                        {item.price}
                                                                    </span></p>
                                                                </div>
                                                            </li>
                                                        ))
                                                    }


                                                </ul>
                                                <div className="bottom">
                                                    <div className="total">
                                                        <span>Total</span>
                                                        <span className="total-amount">
                                                            {`₹${cartItems.reduce(
                                                                (acc, item) => acc + item.quantity * item.price,
                                                                0
                                                            )}`}
                                                        </span>
                                                    </div>
                                                    <div className="button">
                                                        <Link to="/cart" className="btn animate">Checkout</Link>
                                                    </div>
                                                </div>
                                            </div>
                                        )}

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>



        </header >

    )
}

export default Header