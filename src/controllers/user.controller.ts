import { Request, Response } from "express";
import { AuthService } from "../services/auth.service";
import { userData } from "../data/user/user.data";

export const register = async (req: Request, res: Response) => {
 try {
  const { name, email, password, role } = req.body;
  const result = await AuthService.register(name, email, password, role);
  res.status(201).json(result);
 } catch (error: any) {
  res.status(400).json({ message: error.message });
 }
};

export const login = async (req: Request, res: Response) => {
 try {
  const { email, password } = req.body;
  const result = await AuthService.login(email, password);
  res.status(200).json(result);
 } catch (error: any) {
  res.status(400).json({ message: error.message });
 }
};

export const getUsers = (req: Request, res: Response): void => {
 try {
  const { role, name, id } = req.query;

  let usersList = userData;

  switch (true) {
   case !!id:
    usersList = usersList.filter((user) => user.id.toString() === id);
    break;

   case !!role:
    usersList = usersList.filter((user) => user.role === role);
    break;

   case !!name:
    const nameLower = name.toString().toLowerCase();
    usersList = usersList.filter((user) => user.name.toLowerCase().includes(nameLower));
    break;

   default:
    break;
  }

  res.status(200).json(usersList);
 } catch (error) {
  res.status(500).json({ message: "Internal server error" });
 }
};
