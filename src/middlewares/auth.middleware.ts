import { Request, Response, NextFunction } from "express";
import { verifyToken } from "../utils/jwt.utils";

export const authenticate = (req: Request, res: Response, next: NextFunction) => {
 const token = req.header("Authorization")?.split(" ")[1];

 if (!token) {
  return res.status(401).json({ message: "Access denied. No token provided." });
 }

 try {
  const decoded = verifyToken(token);
  (req as any).user = decoded;
  next();
 } catch (error) {
  res.status(401).json({ message: "Invalid token" });
 }
};
