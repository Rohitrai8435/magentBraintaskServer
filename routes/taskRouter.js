import {
  createTask,
  deleteTask,
  getMyTask,
  getSingleTask,
  updateTask,
  getByTaskUser,
} from "../controller/taskController.js";
import express from "express";
import { isAuthenticated } from "../middlewares/auth.js";
import { isAdmin } from "../middlewares/isAdmin.js";

const router = express.Router();

router.post("/post", isAuthenticated, isAdmin, createTask);
router.delete("/delete/:id", isAuthenticated, isAdmin, deleteTask);
router.put("/update/:id", isAuthenticated, isAdmin, updateTask);
router.get("/mytask", isAuthenticated, getMyTask);
router.get("/getTaskByUser/:id", getByTaskUser);
router.get("/single/:id", isAuthenticated, getSingleTask);

export default router;
