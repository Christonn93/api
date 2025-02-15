import { Router } from "express";
import { addComment, likeComment, dislikeComment, replyToComment } from "../../controllers/socialMedia/comment.controller";
import authMiddleware from "../../middleware/auth/auth.middleware";

const router = Router();

router.post("/:postId/comment", authMiddleware, addComment);
router.post("/:postId/comment/:commentId/like", authMiddleware, likeComment);
router.post("/:postId/comment/:commentId/dislike", authMiddleware, dislikeComment);
router.post("/:postId/comment/:commentId/reply", authMiddleware, replyToComment);

export default router;
