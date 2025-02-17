import express from "express";
import { registerUser, loginUser, refreshToken, logoutUser, updateUserInfo } from "../controller/authController";

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.put("/users/:userId", updateUserInfo);
router.post("/refresh", refreshToken);
router.post("/logout", logoutUser);

export default router;
