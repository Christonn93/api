import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import { logger } from "../error/logger";

const authMiddleware = (req: Request, res: Response, next: NextFunction): void => {
 const token = req.headers.authorization?.split(" ")[1];

 if (!token) {
  res.status(401).json({ message: "Access denied" });
  return;
 }

 try {
  const decoded = jwt.verify(token, process.env.JWT_SECRET as string);
  (req as any).user = decoded;
  next();
 } catch {
  logger.error("Invalid token");
  res.status(401).json({ message: "Invalid token" });
 }
};

export default authMiddleware;
