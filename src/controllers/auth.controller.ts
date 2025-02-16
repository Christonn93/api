import { Request, Response } from "express";
import bcrypt from "bcryptjs";
import { generateToken } from "../utils/jwt.utils";
import { authUser, AuthUser } from "../models/auth.model";

export const register = async (req: Request, res: Response) => {
 const { email, password } = req.body;

 if (!email || !password) {
  return res.status(400).json({ message: "Email and password are required" });
 }

 const existingUser = authUser.find((user) => user.email === email);
 if (existingUser) {
  return res.status(400).json({ message: "User already exists" });
 }

 const hashedPassword = await bcrypt.hash(password, 10);
 const newUser: AuthUser = { id: authUser.length + 1, email, password: hashedPassword };
 authUser.push(newUser);

 res.status(201).json({ message: "User registered successfully" });
};

export const login = async (req: Request, res: Response) => {
 const { email, password } = req.body;

 const user = authUser.find((u) => u.email === email);
 if (!user) {
  return res.status(401).json({ message: "Invalid credentials" });
 }

 const isValidPassword = await bcrypt.compare(password, user.password);
 if (!isValidPassword) {
  return res.status(401).json({ message: "Invalid credentials" });
 }

 const token = generateToken(user.id);
 res.json({ token });
};
