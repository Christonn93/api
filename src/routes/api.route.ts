import { Router } from "express";
import authRoutes from "./auth/auth.routes";
import socialMediaRoutes from "./socialMedia/socialMedia.routes";
import vehicleRoutes from "./vehicleStore/vehicle.routes";

const router = Router();

router.use("/auth", authRoutes);
router.use("/social-media", socialMediaRoutes);
router.use("/vehicle-store", vehicleRoutes);

export default router;
