import { Router } from "express";
import { registerUser, loginUser, protectedRoute } from "../../controllers/auth/auth.controller";
import authMiddleware from "../../middleware/auth/auth.middleware";

const router = Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/protected", authMiddleware, protectedRoute);

export default router;
