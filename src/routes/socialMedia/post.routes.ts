import { Router } from "express";
import { createPost, likePost, dislikePost } from "../../controllers/socialMedia/post.controller";
import authMiddleware from "../../middleware/auth/auth.middleware";

const router = Router();

router.post("/", authMiddleware, createPost);
router.put("/:id/like", authMiddleware, likePost);
router.put("/:id/dislike", authMiddleware, dislikePost);

export default router;
