import React, { Fragment, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Loader from "./layout/Loader"
import ProductCard from './layout/ProductCard'
import { useDispatch, useSelector } from "react-redux"
import { clearErrors, getProduct } from "../actions/productAction"
const Home = () => {

    const { loading, error, products } = useSelector((state) => state.products);

    // console.log(products);

    const dispatch = useDispatch();

    useEffect(() => {
        if (error) {
            // alert.error(error);
            dispatch(clearErrors());
        }
        dispatch(getProduct());
    }, [dispatch, error,]);


    return (
        <Fragment>
            {loading ? (
                <Loader />
            ) : (
                <Fragment>
                    <section className="trending-product section" style={{ marginTop: "20px" }}>
                        <div className="container">
                            <div className="row">
                                <div className="col-12">
                                    <div className="section-title">
                                        <h2>Trending Products</h2>
                                        <p>There are many variations of passages of Lorem Ipsum available, but the majority have
                                            suffered alteration in some form.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="row products-listing-home">
                                {products &&
                                    products.map((product) => (
                                        <div className="col-lg-3 col-md-6 col-12" key={product._id}>
                                            <ProductCard key={product._id} product={product} />
                                        </div>
                                    ))}

                            </div>
                        </div>
                    </section>
                </Fragment>
            )}
        </Fragment>

    )
}

export default Home