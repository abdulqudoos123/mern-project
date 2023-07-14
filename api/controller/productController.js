const productSchema = require("../model/productSchema");
const ProductSchema = require("../model/productSchema");


//create
const createProduct = async (req, res) => {
    try {
        const newProduct = await ProductSchema.create(req.body)
        res.status(200).json(newProduct);
    } catch (error) {
        res.status(500).json(error.message);
    }
}

//update
const updateProduct = async (req, res) => {
    try {
        const updatProduct = await productSchema.findByIdAndUpdate(
            req.params.id,
            { $set: req.body }
        );
        res.status(200).json(updatProduct);
    } catch (error) {
        res.status(500).json(error.message);

    }
}

//get all
const getAllProducts = async (req, res) => {
    try {
        const allProduct = await ProductSchema.find();
        res.status(200).json(allProduct)
    } catch (error) {
        res.status(500).json(error.message);
    }
}

//delete product
const deleteProduct = async (req, res) => {
    try {
        await ProductSchema.findByIdAndDelete(req.params.id, req.body);
        res.status(200).json("product is deleted");
    } catch (error) {
        res.status(500).json(error.message);
    }
}

module.exports = { createProduct, updateProduct, getAllProducts, deleteProduct };