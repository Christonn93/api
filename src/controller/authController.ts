import { Request, Response, NextFunction } from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { JWT_SECRET, REFRESH_SECRET, refreshTokens } from "../config/settings";
import { hashPassword } from "../utils/hash";
import { createUser, findUserByEmail, updateUserDetails } from "../model/userModel";
import { deleteRefreshToken, generateToken, verifyRefreshToken } from "../model/tokenModel";

// Register User
export const registerUser = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
 const { email, password, username, firstName, lastName } = req.body;

 // Validate required fields
 if (!email || !password || !username || !firstName || !lastName) {
  res.status(400).json({ message: "All fields are required" });
  return;
 }

 // Hash the password
 const hashedPassword = await hashPassword(password);

 try {
  // Create user with the essential details
  const user = await createUser({
   email,
   password: hashedPassword,
   username,
   firstName,
   lastName,
  });

  // Return the created user (you can exclude sensitive fields if needed)
  res.status(201).json({ message: "User created", user });
 } catch (error) {
  next(error); // Pass the error to the error handling middleware
 }
};

// Login User
export const loginUser = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
 const { email, password } = req.body;

 const user = await findUserByEmail(email);
 if (!user) {
  res.status(401).json({ message: "Invalid credentials" });
  return;
 }

 const isMatch = await bcrypt.compare(password, user.password);
 if (!isMatch) {
  res.status(401).json({ message: "Invalid credentials" });
  return;
 }

 const token = jwt.sign({ id: user.id }, JWT_SECRET, { expiresIn: "15m" });
 const refreshToken = jwt.sign({ id: user.id }, REFRESH_SECRET, { expiresIn: "7d" });

 refreshTokens.add(refreshToken);
 res.cookie("refreshToken", refreshToken, { httpOnly: true, secure: false, sameSite: "strict" });

 // Get expiration date for the tokens
 const decodedToken = jwt.decode(token) as jwt.JwtPayload;
 const tokenExpiration = decodedToken?.exp ? new Date(decodedToken.exp * 1000) : null;
 const decodedRefreshToken = jwt.decode(refreshToken) as jwt.JwtPayload;
 const refreshTokenExpiration = decodedRefreshToken?.exp ? new Date(decodedRefreshToken.exp * 1000) : null;

 const userResponse = {
  id: user.id,
  email: user.email,
  username: user.username,
  firstName: user.firstName,
  lastName: user.lastName,
  age: user.age,
  location: user.location,
  role: user.role,
  work: user.work,
  contactInfo: user.contactInfo,
  token,
  refreshToken,
  tokenExpiration: tokenExpiration ? tokenExpiration.toISOString() : null,
  refreshTokenExpiration: refreshTokenExpiration ? refreshTokenExpiration.toISOString() : null,
 };

 res.json(userResponse);
};

// Update User Info
export const updateUserInfo = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
 const { userId } = req.params;
 const { age, location, role, work, contactInfo } = req.body;

 try {
  const updatedUser = await updateUserDetails(userId, {
   age,
   location,
   role,
   work,
   contactInfo,
  });

  res.status(200).json({ message: "User info updated", updatedUser });
 } catch (error) {
  next(error);
 }
};

// Refresh Token
export const refreshToken = (req: Request, res: Response, next: NextFunction): void => {
 const { refreshToken } = req.cookies as { refreshToken?: string };

 if (!refreshToken || !verifyRefreshToken(refreshToken)) {
  res.status(403).json({ message: "Unauthorized" });
  return;
 }

 const decoded = verifyRefreshToken(refreshToken);
 if (!decoded) {
  res.status(403).json({ message: "Unauthorized" });
  return;
 }

 const userId = decoded.id;
 const newToken = generateToken(userId);

 // Get expiration date for the refresh token
 const refreshTokenExpiration = decoded.exp ? new Date(decoded.exp * 1000) : null;

 res.json({
  token: newToken,
  refreshTokenExpiration: refreshTokenExpiration ? refreshTokenExpiration.toISOString() : null,
 });
};

// Logout User
export const logoutUser = (req: Request, res: Response, next: NextFunction): void => {
 const { refreshToken } = req.cookies as { refreshToken?: string };
 if (refreshToken) {
  deleteRefreshToken(refreshToken);
 }
 res.clearCookie("refreshToken");
 res.json({ message: "Logged out" });
};
