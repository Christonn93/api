import { Request, Response } from "express";
import { logger } from "../../middleware/error/logger";

let posts: any[] = [];
let postIdCounter = 1;

export const createPost = async (req: Request, res: Response): Promise<void> => {
 const { content } = req.body;
 if (!content) {
  logger.error("Post creation failed: Content is required");
  res.status(400).json({ message: "Content is required" });
  return;
 }

 const newPost = {
  id: postIdCounter++,
  content,
  likes: 0,
  dislikes: 0,
  comments: [],
 };

 posts.push(newPost);
 logger.info(`Post created: ${JSON.stringify(newPost)}`);
 res.status(201).json(newPost);
};

export const likePost = async (req: Request, res: Response): Promise<void> => {
 const { id } = req.params;
 const post = posts.find((post) => post.id === parseInt(id));

 if (!post) {
  logger.error(`Post with id ${id} not found for liking`);
  res.status(404).json({ message: "Post not found" });
  return;
 }

 post.likes += 1;
 logger.info(`Post with id ${id} liked. Current likes: ${post.likes}`);
 res.json(post);
};

export const dislikePost = async (req: Request, res: Response): Promise<void> => {
 const { id } = req.params;
 const post = posts.find((post) => post.id === parseInt(id));

 if (!post) {
  logger.error(`Post with id ${id} not found for disliking`);
  res.status(404).json({ message: "Post not found" });
  return;
 }

 post.dislikes += 1;
 logger.info(`Post with id ${id} disliked. Current dislikes: ${post.dislikes}`);
 res.json(post);
};
