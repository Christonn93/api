import express from "express";
import { getUsers } from "../controllers/user.controller";

export const router = express.Router();

// Routes
router.get("/users", getUsers);
router.get("/users/:id", getUsers);
router.get("/users/role/:role", getUsers);
router.get("/users/name/:name", getUsers);
