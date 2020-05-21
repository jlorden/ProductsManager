const productController = require("../controllers/products.controller");

module.exports = app => {
  app.get("/api/products/", productController.returnAllProducts);
  app.post("/api/products/", productController.createProduct);
  app.put("/api/products/:_id", productController.updateProduct);
  app.delete("/api/products/:_id", productController.deleteProduct);
};