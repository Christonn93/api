import { NextFunction } from "express";

export type ErrorResponse = {
 status: number;
 message: string;
};

export type Logger = {
 info: (message: string) => void;
 error: (message: string) => void;
};

export type Middleware = {
 errorHandler: (err: ErrorResponse, req: Request, res: Response, next: NextFunction) => void;
 logger: Logger;
};
