const express = require("express");
const app = express();
const path = require("path")

app.use("/uploads", express.static(path.join(__dirname, "../uploads")));


app.use(express.json());

// Routes Import
const productRoute = require("./Routes/productRoute");
const uploadRoute = require("./Routes/uploadRoute");

app.use("/api/v1", productRoute);
app.use("/api/v1", uploadRoute)

module.exports = app;