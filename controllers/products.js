const ProductModel = require("../models/product");

module.exports = {
    index
}

async function index(req, res) {
    try {
        const products = await ProductModel.find({});
        res.status(300).json(products);

    } catch (err) {
        res.json({error: err})
    }
}