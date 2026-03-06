import express from "express";
import { addProduct, getAllProducts, getProductById, removeProduct, updateProduct } from "../controllers/productController.js";
import { upload } from "../middlewares/upload.js";

const router = express.Router();

router.post("/add",upload.single("image"),addProduct);
router.get("/all",getAllProducts);
router.get("/product/:id",getProductById);
router.put("/update/:id",upload.single("image"),updateProduct);
router.delete("/remove/:id",removeProduct);


export default router;