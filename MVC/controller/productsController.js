const products = require("../models/productsModel");



const express = require("express");

const app = express();




const path = require("path");

exports.getProducts = (req,res)=>{
    res.sendFile(path.join(__dirname+"/../views/product.html"));
};

exports.saveProducts = (req,res)=>{
    const productName = req.body.productName;
    const productPrice = Number(req.body.productPrice);

    const product = {
        productName,
        productPrice,
    };

    products.push(product);

    res.status(201).json({
        message: "product add successfully",
        products,

    })



}