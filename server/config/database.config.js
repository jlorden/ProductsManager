const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/product-manager", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log("Database connected"))
    .catch(err => console.log("Not Connected...", err));