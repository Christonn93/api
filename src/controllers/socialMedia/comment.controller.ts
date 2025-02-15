import { Request, Response } from "express";
import { logger } from "../../middleware/error/logger";

let comments: any[] = [];
let commentIdCounter = 1;

export const addComment = async (req: Request, res: Response): Promise<void> => {
 const { postId } = req.params;
 const { content } = req.body;

 if (!content) {
  logger.error("Comment creation failed: Content is required");
  res.status(400).json({ message: "Content is required" });
  return;
 }

 const newComment = {
  id: commentIdCounter++,
  postId: parseInt(postId),
  content,
  likes: 0,
  dislikes: 0,
  replies: [],
 };

 comments.push(newComment);
 logger.info(`Comment added to post ${postId}: ${JSON.stringify(newComment)}`);
 res.status(201).json(newComment);
};

export const likeComment = async (req: Request, res: Response): Promise<void> => {
 const { postId, commentId } = req.params;
 const comment = comments.find((comment) => comment.id === parseInt(commentId) && comment.postId === parseInt(postId));

 if (!comment) {
  logger.error(`Comment with id ${commentId} not found for liking`);
  res.status(404).json({ message: "Comment not found" });
  return;
 }

 comment.likes += 1;
 logger.info(`Comment with id ${commentId} liked. Current likes: ${comment.likes}`);
 res.json(comment);
};

export const dislikeComment = async (req: Request, res: Response): Promise<void> => {
 const { postId, commentId } = req.params;
 const comment = comments.find((comment) => comment.id === parseInt(commentId) && comment.postId === parseInt(postId));

 if (!comment) {
  logger.error(`Comment with id ${commentId} not found for disliking`);
  res.status(404).json({ message: "Comment not found" });
  return;
 }

 comment.dislikes += 1;
 logger.info(`Comment with id ${commentId} disliked. Current dislikes: ${comment.dislikes}`);
 res.json(comment);
};

export const replyToComment = async (req: Request, res: Response): Promise<void> => {
 const { postId, commentId } = req.params;
 const { content } = req.body;

 if (!content) {
  logger.error("Reply creation failed: Content is required");
  res.status(400).json({ message: "Content is required" });
  return;
 }

 const parentComment = comments.find((comment) => comment.id === parseInt(commentId) && comment.postId === parseInt(postId));

 if (!parentComment) {
  logger.error(`Parent comment with id ${commentId} not found for reply`);
  res.status(404).json({ message: "Parent comment not found" });
  return;
 }

 const newReply = {
  id: commentIdCounter++,
  content,
  likes: 0,
  dislikes: 0,
 };

 parentComment.replies.push(newReply);
 logger.info(`Reply added to comment ${commentId}: ${JSON.stringify(newReply)}`);
 res.status(201).json(newReply);
};
