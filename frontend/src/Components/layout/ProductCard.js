import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom'
import { addItemsToCart } from "../../actions/cartAction";
import AlertMessage from '../AlertMessage';

const ProductCard = ({ product }) => {

    const { cartItems } = useSelector((state) => state.cart);

    const dispatch = useDispatch();


    const [show, setShow] = useState("none");
    const [varient, setVarient] = useState("");
    const [statusMessage, setStatusMessage] = useState("");

    let quantity = 1;

    const addToCartHandler = () => {
        cartItems.find(item => {
            if (item.product === product._id) {
                quantity = item.quantity + 1
                return quantity
            }
            return ''
        });

        dispatch(addItemsToCart(product._id, quantity));
        setShow("block");
        setVarient("alert-success");
        setStatusMessage("Item added to cart")
    };

    return (
        <div className="single-product" key={product._id}>
            <AlertMessage show={show} variant={varient} message={statusMessage} />
            <div className="product-image">
                <img src={product.image} alt={product.name} />

                <div className="button">
                    <span onClick={addToCartHandler} className="btn"><i className="lni lni-cart"></i> Add to Cart</span>
                </div>
            </div>
            <div className="product-info">
                <span className="category">{product.category}</span>
                <h4 className="title">
                    <Link className="productCard" to={`/product/${product._id}`}>{product.name}</Link>
                </h4>

                <div className="price">
                    <span>{`₹${product.price}`}</span>
                </div>
            </div>
        </div >


    )
}

export default ProductCard