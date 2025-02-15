import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { errorHandler } from "./middleware/error/errorHandler";

import authRoutes from "./routes/auth/auth.routes";
import apiRoutes from "./routes/api.route";
import userRoutes from "./routes/user/user.routes";
import vehicleRoutes from "./routes/vehicleStore/vehicle.routes";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api", apiRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/user", userRoutes);
app.use("/api/vehicles", vehicleRoutes);

app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
