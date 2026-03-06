import express from "express";
import { addToCart, clearCart, getUserCart, removeCartItem, updateCartItem } from "../controllers/cartController.js";
import authMiddleware from "../middlewares/authMiddleware.js";

const router = express.Router();

router.post("/add",authMiddleware,addToCart);
router.get("/cart",authMiddleware,getUserCart);
router.put("/update/:id", authMiddleware, updateCartItem);
router.delete("/remove/:id", authMiddleware, removeCartItem);
router.delete("/clear", authMiddleware, clearCart);

export default router;