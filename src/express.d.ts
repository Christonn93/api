import { Request } from "express";

declare module "express-serve-static-core" {
 interface Request {
  user?: {
   id: string;
   role: string;
   name: string;
   email: string;
   passwordHash: string;
  };
 }
}
