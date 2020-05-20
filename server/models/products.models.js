const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
	product:{
        type:String,
        required:[true, "Product must have a name"]
    },
    price: {
        type:Number,
        required:[true, "Product must have a price."]
    },
    description: {
        type:String,
        required: [true, "MProduct must have a Description"]
    }
});

const Product = mongoose.model("product", ProductSchema);

module.exports = Product;