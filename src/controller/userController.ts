import { Request, Response, NextFunction } from "express";
import prisma from "../config/db";

// Get user by ID
export const getUserById = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
 const { userId } = req.params;

 try {
  const user = await prisma.user.findUnique({
   where: { id: userId },
   select: {
    id: true,
    email: true,
    username: true,
    firstName: true,
    lastName: true,
    age: true,
    location: true,
    role: true,
    work: true,
    contactInfo: true,
   },
  });

  if (!user) {
   res.status(404).json({ message: "User not found" });
   return;
  }

  res.json(user);
 } catch (error) {
  next(error);
 }
};

// Get list of all users
export const listUsers = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
 try {
  const users = await prisma.user.findMany({
   select: {
    id: true,
    email: true,
    username: true,
    firstName: true,
    lastName: true,
    age: true,
    location: true,
    role: true,
    work: true,
    contactInfo: true,
   },
  });

  res.json(users);
 } catch (error) {
  next(error);
 }
};
