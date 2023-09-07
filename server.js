const express = require("express");
const mongoose = require("mongoose");
const userRoutes = require("./app/routes/userRoutes");
const productRoutes = require("./app/routes/productRoutes");
const orderRoutes = require("./app/routes/orderRoutes");
const imageRoutes = require("./app/routes/imageRoutes");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 3000;
const MONGODB_URI = "mongodb://127.0.0.1:27017/mydatabase";

mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(cors());
app.use(express.json());

app.use("/api/users", userRoutes);
app.use("/api/products", productRoutes);
app.use("/api/orders", orderRoutes);
app.use("/uploads", express.static("uploads"));

// Use the image routes
app.use("/", imageRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
