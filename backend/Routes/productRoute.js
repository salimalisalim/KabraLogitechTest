const express = require("express");
const { createProduct, getAllProducts, getProductDetails } = require("../controllers/productController");
const router = express.Router();

router.route("/product/new").post(createProduct);

router.route("/product/:id").get(getProductDetails);


router.route("/products").get(getAllProducts);


module.exports = router