import { Router } from "express";
import { getVehicles, createVehicle } from "../../controllers/vehicleStore/vehicle.controller";
import authMiddleware from "../../middleware/auth/auth.middleware";

const router = Router();

router.get("/vehicles", getVehicles);
router.post("/vehicles", authMiddleware, createVehicle);

export default router;
