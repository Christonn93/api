import express from "express";
import { createMarketplaceItem, getAllMarketplaceItems, getMarketplaceItemById, updateMarketplaceItem, deleteMarketplaceItem } from "../controllers/marketplace.controller";

export const router = express.Router();

router.post("/", createMarketplaceItem);
router.get("/", getAllMarketplaceItems);
router.get("/:id", getMarketplaceItemById);
router.put("/:id", updateMarketplaceItem);
router.delete("/:id", deleteMarketplaceItem);
