import express from "express";
import {
  getDashboardStats,
  getAllOrders,
  updateOrderStatus,
  deleteOrder,
} from "../controllers/adminController.js";

import authMiddleware from "../middlewares/authMiddleware.js";
import adminMiddleware from "../middlewares/adminMiddleware.js";

const router = express.Router();

router.get("/dashboard", authMiddleware, adminMiddleware, getDashboardStats);

router.get("/orders", authMiddleware, adminMiddleware, getAllOrders);

router.put("/orders/:id", authMiddleware, adminMiddleware, updateOrderStatus);

router.delete("/orders/:id", authMiddleware, adminMiddleware, deleteOrder);

export default router;
