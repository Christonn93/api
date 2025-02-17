import express from "express";
import { swaggerUi, specs } from "../config/swagger/swaggerConfig";

const router = express.Router();

// Swagger UI Route
router.use(
 "/",
 swaggerUi.serve,
 swaggerUi.setup(specs, {
  customCss: ".swagger-ui { background-color: #f0f0f0; }",
  customCssUrl: "./config/swagger/style/customCssUrl.css",
  customSiteTitle: "My API Docs",
 })
);

export default router;
