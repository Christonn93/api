import app from "./app";

import { router as userRoutes } from "./routes/user.routes";
import { router as authRoutes } from "./routes/auth.routes";
import { router as marketplaceRouter } from "./routes/marketplace.routes";

const apiV1 = "/api/v1";
const apiV2 = "/api/v2";

// Routes
app.use(`${apiV1}/auth`, authRoutes);
app.use(`${apiV1}/user`, userRoutes);
