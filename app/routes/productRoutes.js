const express = require("express");
const router = express.Router();
const productController = require("../controllers/productController");

// Product routes
router.get("/", productController.getAllProducts);
router.post("/", productController.createProduct);
router.get("/products/:id", productController.getProductById);

// Add more routes for create, update, and delete products

module.exports = router;
