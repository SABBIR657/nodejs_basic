const express = require("express");
const { getProducts, saveProducts } = require("../controller/productsController");



const router = express.Router();

router.get("/product",getProducts);

router.post("/product",saveProducts);

module.exports = router;