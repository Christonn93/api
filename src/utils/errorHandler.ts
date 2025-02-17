import { Request, Response, NextFunction } from "express";
import { logger } from "./logger";
import { ErrorResponse } from "../../models/middleWare.model";

export const errorHandler = (err: ErrorResponse, req: Request, res: Response, next: NextFunction): void => {
 logger.error({
  message: err.message || "Internal Server Error",
  meta: req.originalUrl,
 });

 res.status(err.status || 500).json({
  error: {
   message: err.message || "Something went wrong",
  },
 });
};
