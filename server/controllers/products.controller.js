const Product = require("../models/products.model");

module.exports.returnAllProducts = (req, res) => {
    Product.find()
        .then(allProducts => res.json({ product: allProducts }))
        .catch(err => res.json({ message: "warning... ", error: err }));
    };

module.exports.createProduct = (req, res) => {
    console.log(req.body);
    Product.create(req.body)
        .then(newProduct => res.json({ product: newProduct }))
        .catch(err => res.json( err ));
    };


    module.exports.updateProduct = (req, res) => {
    Product.findByIdAndUpdate({ _id: req.params._id }, req.body, {runValidators:true})
        .then(editProduct => res.json({ product: editProduct }))
        .catch(err => res.json({err }));
    };

    module.exports.deleteProduct = (req, res) => {
    Product.findByIdAndDelete({ _id: req.params._id })
        .then(() => res.json({ msg: "tisdone"} ))
        .catch(err => res.json(  err ));
    };