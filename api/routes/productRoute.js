const router = require("express").Router();
const {createProduct, updateProduct, getAllProducts, deleteProduct} = require("../controller/productController")


//create product
router.post("/create", createProduct);

//update product
router.put("/:id", updateProduct);

//get all products
router.get("/", getAllProducts);

//delete product
router.delete("/:id", deleteProduct);


module.exports = router;