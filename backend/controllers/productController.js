const Product = require("../models/productModel");
const ErrorHandler = require("../utils/errorhandler");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");


// Create New Product
exports.createProduct = catchAsyncErrors(async (req, res, next) => {

    const { name, price, description, quantity, image } = req.body

    if (!name || !price || !description || !quantity || !image) {
        res.status(401).json({
            success: false,
            message: "Fields can't be empty"
        })
    }

    const product = await Product.create(req.body);

    res.status(201).json({
        success: true,
        message: "Product Created",
        product,
    });
});


// Get Product Details
exports.getProductDetails = catchAsyncErrors(async (req, res, next) => {
    const product = await Product.findById(req.params.id);

    if (!product) {
        return next(new ErrorHandler("Product not found", 404));
    }

    res.status(200).json({
        success: true,
        product,
    });
});


// Get All Product - 
exports.getAllProducts = catchAsyncErrors(async (req, res, next) => {

    const products = await Product.find();

    // console.log(products);

    res.status(200).json({
        success: true,
        products,
    });
});