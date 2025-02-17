import "dotenv/config";
import express, { Request, Response } from "express";
import { PORT } from "./config/settings";
import { enableCors, parseCookies, sessionMiddleware } from "./middleware/middleware";

const app = express();

// Middleware
app.use(express.json());
app.use(parseCookies);
app.use(enableCors);
app.use(sessionMiddleware);

app.listen(PORT, () => {
 console.log(`Server running on http://localhost:${PORT}`);
});

app.get("/", (req: Request, res: Response) => {
 res.send("API is running");
});

export default app;
