import express from "express";
import { getAllOrders, getMyOrders, getSingleOrder, placeOrder, updateOrderStatus } from "../controllers/orderController.js";
import authMiddleware from "../middlewares/authMiddleware.js";

const router = express.Router();

router.post("/place", authMiddleware, placeOrder);
router.get("/my-orders", authMiddleware, getMyOrders);
router.get("/all", authMiddleware, getAllOrders);
router.get("/:id", authMiddleware, getSingleOrder);
router.put("/status/:id", authMiddleware, updateOrderStatus);



export default router;