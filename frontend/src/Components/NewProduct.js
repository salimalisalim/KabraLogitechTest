import React, { Fragment, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { clearErrors, createProduct } from "../actions/productAction";
import { NEW_PRODUCT_RESET } from "../constants/productConstants";
import Loader from "./layout/Loader";
import "./NewProduct.css"
import axios from "axios"
import AlertMessage from "./AlertMessage";


const NewProduct = () => {

    const dispatch = useDispatch()

    const { loading, error, success, message } = useSelector((state) => state.newProduct);

    const [name, setName] = useState("");
    const [price, setPrice] = useState(0);
    const [description, setDescription] = useState("");
    const [quantity, setQuantity] = useState(0);
    const [image, setImage] = useState("");
    const [uploading, setUploading] = useState(false);
    const [show, setShow] = useState("none");
    const [varient, setVarient] = useState("");
    const [statusMessage, setStatusMessage] = useState("");

    const createProductSubmitHandler = async (e) => {
        e.preventDefault();

        const produtDetails = {
            name,
            price,
            description,
            quantity,
            image
        }

        dispatch(createProduct(produtDetails));
    }

    const uploadFileHandler = async (e) => {
        const file = e.target.files[0]
        const formData = new FormData()
        formData.append('image', file)
        setUploading(true)

        try {
            const config = {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            }

            const { data } = await axios.post('/api/v1/upload', formData, config)

            setImage(data)
            setUploading(false)
        } catch (error) {
            console.error(error)
            setUploading(false)
        }

    }

    useEffect(() => {
        if (success) {
            setShow("block");
            setVarient("alert-success");
            setStatusMessage(message)
            setName("");
            setPrice("");
            setQuantity("");
            setDescription("");
            setImage("");
        }
        if (error) {
            setShow("block");
            setVarient("alert-danger");
            setStatusMessage(error)

        }
    }, [error, success, message, show, varient, statusMessage])


    return (
        <Fragment>

            <div className="dashboard">
                {/* <SideBar /> */}
                <div className="container ">
                    <div className=" mb-4 mt-4 text-center">
                        <h1 className="h3 mb-0 text-gray-800  ">Create Product</h1>

                    </div>
                    <div className="newProductContainer">
                        <AlertMessage show={show} variant={varient} message={statusMessage} />

                        <div className="p-2">
                            <form onSubmit={createProductSubmitHandler}>
                                <div className="form-outline mb-2">
                                    <label className="form-label" >Product Name</label>
                                    <input
                                        type="text"
                                        placeholder="Product Name"
                                        className="form-control"
                                        // required
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                    />
                                </div>

                                <div className="form-outline ">
                                    <div className="row">
                                        <div className="col-md-6 col-sm-12  mb-2">
                                            <label className="form-label" >Price</label>
                                            <input
                                                type="number"
                                                placeholder="Price"
                                                // required
                                                className="form-control"
                                                onChange={(e) => setPrice(e.target.value)}
                                            />
                                        </div>
                                        <div className="col-md-6 col-sm-12 mb-2">
                                            <label className="form-label" >Quantity</label>
                                            <input
                                                type="number"
                                                placeholder="Quantity"
                                                // required
                                                className="form-control"
                                                onChange={(e) => setQuantity(e.target.value)}
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="form-outline mb-2">
                                    <label className="form-label" >Product Description</label>
                                    <textarea
                                        placeholder="Product Description"
                                        className="form-control"
                                        // required
                                        value={description}
                                        onChange={(e) => setDescription(e.target.value)}
                                        cols="30"
                                        rows="2"
                                    ></textarea>
                                </div>
                                <div className="form-outline mb-2">
                                    <label className="form-label" >Product Image</label>
                                    <input
                                        type="file"
                                        name="productImage"
                                        // required
                                        className="form-control"
                                        accept="image/*"
                                        onChange={uploadFileHandler}
                                    />
                                    {uploading && <Loader />}

                                </div>
                                <button type="submit"
                                    disabled={loading ? true : false}
                                    className="btn btn-primary btn-block mt-3">Create Product</button>

                            </form>
                        </div>

                    </div>
                </div>
            </div>
        </Fragment >
    );
};

export default NewProduct;
