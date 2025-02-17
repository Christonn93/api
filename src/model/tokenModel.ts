import jwt from "jsonwebtoken";
import { JWT_SECRET, REFRESH_SECRET, refreshTokens } from "../config/settings";
import { JwtPayload } from "jsonwebtoken";

export const generateToken = (userId: string): string => {
 return jwt.sign({ id: userId }, JWT_SECRET, { expiresIn: "15m" });
};

export const generateRefreshToken = (userId: string): string => {
 const refreshToken = jwt.sign({ id: userId }, REFRESH_SECRET, { expiresIn: "7d" });
 refreshTokens.add(refreshToken);
 return refreshToken;
};

export const verifyRefreshToken = (refreshToken: string): JwtPayload | null => {
 try {
  return jwt.verify(refreshToken, REFRESH_SECRET) as JwtPayload;
 } catch (error) {
  return null;
 }
};

export const deleteRefreshToken = (refreshToken: string): void => {
 refreshTokens.delete(refreshToken);
};
