import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

interface AuthenticatedRequest extends Request {
 user?: { id: string; role: string; name: string; email: string; passwordHash: string };
}

const SECRET_KEY = process.env.JWT_SECRET || "your-secret-key";

export const authMiddleware = (req: AuthenticatedRequest, res: Response, next: NextFunction): void => {
 const token = req.headers.authorization?.split(" ")[1];

 if (!token) {
  res.status(401).json({ message: "Unauthorized" });
  return;
 }

 try {
  const decoded = jwt.verify(token, SECRET_KEY) as { id: string; role: string; name: string; email: string; passwordHash: string };
  req.user = decoded;
  next();
 } catch (error) {
  res.status(401).json({ message: "Invalid or expired token" });
 }
};
