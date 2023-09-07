const express = require("express");
const router = express.Router();
const productController = require("../controllers/productController");

// Product routes
router.get("/products", productController.getAllProducts);
router.get("/products/:id", productController.getProductById);

// Add more routes for create, update, and delete products

module.exports = router;
