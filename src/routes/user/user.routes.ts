import { Router } from "express";
import { createPost, getUserPosts, likePost, dislikePost, createComment, likeComment, dislikeComment } from "../../controllers/user/user.controller";
import authMiddleware from "../../middleware/auth/auth.middleware";

const router = Router();

router.post("/:userId/posts", authMiddleware, createPost);
router.get("/:userId/posts", authMiddleware, getUserPosts);
router.put("/:userId/posts/:postId/like", authMiddleware, likePost);
router.put("/:userId/posts/:postId/dislike", authMiddleware, dislikePost);

router.post("/:userId/posts/:postId/comments", authMiddleware, createComment);
router.put("/:userId/posts/:postId/comments/:commentId/like", authMiddleware, likeComment);
router.put("/:userId/posts/:postId/comments/:commentId/dislike", authMiddleware, dislikeComment);

export default router;
