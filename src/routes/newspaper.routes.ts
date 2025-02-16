import express from "express";
import { createNewspaper, getAllNewspapers, getNewspaperById, updateNewspaper, deleteNewspaper } from "../controllers/newsPaper.controller";

export const router = express.Router();

router.get("/", getAllNewspapers);
router.post("/", createNewspaper);
router.get("/:id", getNewspaperById);
router.put("/:id", updateNewspaper);
router.delete("/:id", deleteNewspaper);
