import express from "express";
import { getUserById, listUsers } from "../controller/userController";
import { authenticateUser } from "../middleware/authMiddleware";

const router = express.Router();

router.get("/:userId", getUserById);
router.get("/list", authenticateUser, listUsers);

export default router;
