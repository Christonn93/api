import jwt from "jsonwebtoken";

const SECRET = process.env.JWT_SECRET || "default_secret";

export const generateToken = (userId: string) => {
 return jwt.sign({ userId }, SECRET, { expiresIn: "1h" });
};
