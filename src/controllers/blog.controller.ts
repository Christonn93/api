import { Request, Response } from "express";

export const createBlog = async (req: Request, res: Response): Promise<Response> => {
 try {
  return res.status(201).json({ message: "Blog created successfully", blog: {} });
 } catch (error) {
  return res.status(500).json({ message: "Failed to create blog", error });
 }
};

export const getBlogs = async (req: Request, res: Response): Promise<Response> => {
 try {
  return res.status(200).json({ message: "Blogs retrieved successfully", blogs: [] });
 } catch (error) {
  return res.status(500).json({ message: "Failed to create blog", error });
 }
};
