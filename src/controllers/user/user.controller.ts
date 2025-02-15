import { Request, Response } from "express";
import { logger } from "../../middleware/error/logger";
import { User, Post, Comment } from "../../types/user.types";

let users: User[] = [];
let postIdCounter = 1;
let commentIdCounter = 1;

export const createPost = async (req: Request, res: Response): Promise<void> => {
 const { userId, content } = req.body;
 const user = users.find((user) => user.id === userId);

 if (!user) {
  logger.error(`User with id ${userId} not found`);
  res.status(404).json({ message: "User not found" });
  return;
 }

 const newPost: Post = {
  id: postIdCounter++,
  content,
  likes: 0,
  dislikes: 0,
  comments: [],
 };

 user.posts.push(newPost);
 logger.info(`Post created for user ${userId}: ${JSON.stringify(newPost)}`);
 res.status(201).json(newPost);
};

export const getUserPosts = async (req: Request, res: Response): Promise<void> => {
 const userId = req.params.id;
 const user = users.find((user) => user.id === userId);

 if (!user) {
  logger.error(`User with id ${userId} not found`);
  res.status(404).json({ message: "User not found" });
  return;
 }

 res.json(user.posts);
};

export const likePost = async (req: Request, res: Response): Promise<void> => {
 const { userId, postId } = req.params;
 const user = users.find((user) => user.id === userId);

 if (!user) {
  logger.error(`User with id ${userId} not found`);
  res.status(404).json({ message: "User not found" });
  return;
 }

 const post = user.posts.find((post) => post.id === parseInt(postId));

 if (!post) {
  logger.error(`Post with id ${postId} not found`);
  res.status(404).json({ message: "Post not found" });
  return;
 }

 post.likes += 1;
 logger.info(`Post with id ${postId} liked for user ${userId}`);
 res.json(post);
};

export const dislikePost = async (req: Request, res: Response): Promise<void> => {
 const { userId, postId } = req.params;
 const user = users.find((user) => user.id === userId);

 if (!user) {
  logger.error(`User with id ${userId} not found`);
  res.status(404).json({ message: "User not found" });
  return;
 }

 const post = user.posts.find((post) => post.id === parseInt(postId));

 if (!post) {
  logger.error(`Post with id ${postId} not found`);
  res.status(404).json({ message: "Post not found" });
  return;
 }

 post.dislikes += 1;
 logger.info(`Post with id ${postId} disliked for user ${userId}`);
 res.json(post);
};

export const createComment = async (req: Request, res: Response): Promise<void> => {
 const { userId, postId, content } = req.body;
 const user = users.find((user) => user.id === userId);

 if (!user) {
  logger.error(`User with id ${userId} not found`);
  res.status(404).json({ message: "User not found" });
  return;
 }

 const post = user.posts.find((post) => post.id === parseInt(postId));

 if (!post) {
  logger.error(`Post with id ${postId} not found`);
  res.status(404).json({ message: "Post not found" });
  return;
 }

 const newComment: Comment = {
  id: commentIdCounter++,
  content,
  likes: 0,
  dislikes: 0,
  replies: [],
 };

 post.comments.push(newComment);
 logger.info(`Comment added to post ${postId} for user ${userId}: ${JSON.stringify(newComment)}`);
 res.status(201).json(newComment);
};

export const likeComment = async (req: Request, res: Response): Promise<void> => {
 const { userId, postId, commentId } = req.params;
 const user = users.find((user) => user.id === userId);

 if (!user) {
  logger.error(`User with id ${userId} not found`);
  res.status(404).json({ message: "User not found" });
  return;
 }

 const post = user.posts.find((post) => post.id === parseInt(postId));

 if (!post) {
  logger.error(`Post with id ${postId} not found`);
  res.status(404).json({ message: "Post not found" });
  return;
 }

 const comment = post.comments.find((comment) => comment.id === parseInt(commentId));

 if (!comment) {
  logger.error(`Comment with id ${commentId} not found`);
  res.status(404).json({ message: "Comment not found" });
  return;
 }

 comment.likes += 1;
 logger.info(`Comment with id ${commentId} liked on post ${postId} for user ${userId}`);
 res.json(comment);
};

export const dislikeComment = async (req: Request, res: Response): Promise<void> => {
 const { userId, postId, commentId } = req.params;
 const user = users.find((user) => user.id === userId);

 if (!user) {
  logger.error(`User with id ${userId} not found`);
  res.status(404).json({ message: "User not found" });
  return;
 }

 const post = user.posts.find((post) => post.id === parseInt(postId));

 if (!post) {
  logger.error(`Post with id ${postId} not found`);
  res.status(404).json({ message: "Post not found" });
  return;
 }

 const comment = post.comments.find((comment) => comment.id === parseInt(commentId));

 if (!comment) {
  logger.error(`Comment with id ${commentId} not found`);
  res.status(404).json({ message: "Comment not found" });
  return;
 }

 comment.dislikes += 1;
 logger.info(`Comment with id ${commentId} disliked on post ${postId} for user ${userId}`);
 res.json(comment);
};
