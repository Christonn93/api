import express from "express";
import { registerUser, loginUser, refreshToken, logoutUser, updateUserInfo } from "../controller/authController";
import { getUserById } from "../controller/userController";

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/users/:userId", getUserById);
router.post("/refresh", refreshToken);
router.post("/logout", logoutUser);

export default router;
