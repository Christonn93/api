import { swaggerUi, specs } from "./config/swagger/swaggerConfig";
import { errorHandler } from "./utils/error/errorHandler";
import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import path from "path";

const app = express();
const PORT = process.env.PORT || 5000;
const apiV1 = "/api/v1";
const apiV2 = "/api/v2";

dotenv.config();

app.use(cors());
app.use(express.json());

// Swagger docs
app.use(
 `${apiV1}/swagger`,
 swaggerUi.serve,
 swaggerUi.setup(specs, {
  customCss: ".swagger-ui { background-color: #f0f0f0; }",
  customCssUrl: "./config/swagger/style/customCssUrl.css",
  customSiteTitle: "My API Docs",
 })
);

app.use(
 `${apiV2}/swagger`,
 swaggerUi.serve,
 swaggerUi.setup(specs, {
  customCss: ".swagger-ui { background-color: #f0f0f0; }",
  customCssUrl: "./config/swagger/style/customCssUrl.css",
  customSiteTitle: "My API Docs",
 })
);

app.use("/swagger-ui", express.static(path.join(__dirname, "node_modules/swagger-ui-dist")));

app.use(errorHandler);

app.listen(PORT, () => {
 console.log(`Server running on http://localhost:${PORT}`);
});

export default app;
