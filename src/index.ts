import app from "./app";

// Controller imports
import swaggerController from "./controller/swaggerController";

// Route imports
import authRouter from "./routes/authRouter";

// Routes
app.use("/docs/swagger", swaggerController);
app.use("/auth", authRouter);
