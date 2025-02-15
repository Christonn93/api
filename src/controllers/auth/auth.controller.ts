import { Request, Response } from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { User, users } from "../../models/user/user.model";

const generateToken = (email: string): string => {
 return jwt.sign({ email }, process.env.JWT_SECRET as string, { expiresIn: "1h" });
};

export const protectedRoute = (req: Request, res: Response): void => {
 res.json({ message: "This is a protected route", user: (req as any).user });
};

export const registerUser = async (req: Request, res: Response): Promise<void> => {
 try {
  const { email, password, firstName, lastName, age } = req.body;

  if (users.find((user) => user.email === email)) {
   res.status(400).json({ message: "User already exists" });
   return;
  }

  const hashedPassword = await bcrypt.hash(password, 10);
  const newUser: User = {
   email,
   password: hashedPassword,
   userId: (users.length + 1).toString(),
   firstName,
   lastName,
   age,
   dateOfRegistration: new Date(),
  };
  users.push(newUser);

  res.status(201).json({ message: "User registered" });
 } catch (error) {
  res.status(500).json({ message: "Server error", error });
 }
};

export const loginUser = async (req: Request, res: Response): Promise<void> => {
 try {
  const { email, password } = req.body;
  const user = users.find((user) => user.email === email);

  if (!user || !(await bcrypt.compare(password, user.password))) {
   res.status(401).json({ message: "Invalid credentials" });
   return;
  }

  const token = generateToken(email);
  res.json({
   userId: user.userId,
   firstName: user.firstName,
   lastName: user.lastName,
   age: user.age,
   dateOfRegistration: user.dateOfRegistration,
   token,
  });
 } catch (error) {
  res.status(500).json({ message: "Server error", error });
 }
};
