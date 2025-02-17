import jwt from "jsonwebtoken";
import { JWT_SECRET } from "../config/settings";
import { Request, Response, NextFunction } from "express";

interface AuthenticatedRequest extends Request {
 user?: any;
}

export const authenticateUser = (req: AuthenticatedRequest, res: Response, next: NextFunction): void => {
 const token = req.header("Authorization")?.split(" ")[1];

 if (!token) {
  res.status(401).json({ message: "Unauthorized: No token provided" });
  return;
 }

 try {
  const decoded = jwt.verify(token, JWT_SECRET);
  req.user = decoded;
  next();
 } catch (error) {
  res.status(401).json({ message: "Unauthorized: Invalid token" });
 }
};
