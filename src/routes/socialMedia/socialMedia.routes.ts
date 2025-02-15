import { Router } from "express";
import { getPosts, createPost } from "../../controllers/socialMedia/socialMedia.controller";
import authMiddleware from "../../middleware/auth/auth.middleware";

const router = Router();

router.get("/", getPosts);
router.post("/", authMiddleware, createPost);

export default router;
