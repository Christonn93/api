import express from "express";

export const router = express.Router();

export const JWT_SECRET = process.env.JWT_SECRET as string;
export const REFRESH_SECRET = process.env.REFRESH_SECRET || "refresh_secret";

export const refreshTokens = new Set<string>();

export const SESSION_SECRET = process.env.SESSION_SECRET as string;
export const PORT = process.env.PORT || 5000;
