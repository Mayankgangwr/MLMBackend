const express = require("express");
const mongoose = require("mongoose");
const productRoutes = require("./agropean/routes/productRoutes");
const userRoutes = require("./agropean/routes/userRoutes");
const orderRoutes = require("./agropean/routes/orderRoutes");

const app = express();
const PORT = process.env.PORT || 3000;
const MONGODB_URI = "mongodb://127.0.0.1:27017/mydatabase";

mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(express.json());

// Use the routes
app.use("/api/products", productRoutes);
app.use("/api/users", userRoutes);
app.use("/api/orders", orderRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
