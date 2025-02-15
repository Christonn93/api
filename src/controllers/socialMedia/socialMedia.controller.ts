import { Request, Response } from "express";
import { Post } from "../../models/socialMedia/post.model";

let posts: Post[] = [];

export const getPosts = async (req: Request, res: Response) => {
 try {
  res.json(posts);
 } catch (error) {
  res.status(500).json({ message: "Error fetching posts", error });
 }
};

export const createPost = async (req: Request, res: Response) => {
 try {
  const { userId, content } = req.body;
  const newPost: Post = {
   id: String(posts.length + 1),
   userId,
   content,
   likes: 0,
   dislikes: 0,
   comments: [],
  };
  posts.push(newPost);
  res.status(201).json(newPost);
 } catch (error) {
  res.status(500).json({ message: "Error creating post", error });
 }
};
