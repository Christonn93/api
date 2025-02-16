import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { User, users } from "../models/user.model";
import { generateUUID } from "../utils/generateUUID";

const SECRET_KEY = process.env.JWT_SECRET || "your-secret-key";

export class AuthService {
 static async register(name: string, email: string, password: string, role: string) {
  if (users.find((user) => user.email === email)) {
   throw new Error("Email already exists");
  }

  const hashedPassword = await bcrypt.hash(password, 10);
  const newUser: User = {
   id: generateUUID(),
   name,
   email,
   passwordHash: hashedPassword,
   role,
  };

  users.push(newUser);
  return { message: "User registered successfully" };
 }

 static async login(email: string, password: string) {
  const user = users.find((user) => user.email === email);
  if (!user) throw new Error("User not found");

  const isPasswordMatch = await bcrypt.compare(password, user.passwordHash);
  if (!isPasswordMatch) throw new Error("Invalid password");

  const token = jwt.sign({ id: user.id, role: user.role }, SECRET_KEY, { expiresIn: "1h" });

  return {
   id: user.id,
   name: user.name,
   email: user.email,
   role: user.role,
   token,
  };
 }
}
