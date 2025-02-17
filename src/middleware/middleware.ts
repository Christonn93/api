import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import session from "express-session";
import { swaggerUi, specs } from "../config/swagger/swaggerConfig";
import { SESSION_SECRET } from "../config/settings";

// CORS Middleware
export const enableCors = cors({ credentials: true, origin: "http://localhost:3000" });

// Cookie Parser Middleware
export const parseCookies = cookieParser();

// Session Middleware
export const sessionMiddleware = session({
 secret: SESSION_SECRET,
 resave: false,
 saveUninitialized: true,
 cookie: { secure: false, httpOnly: true, maxAge: 1000 * 60 * 60 * 24 },
});

// Swagger Middleware
export const swaggerDocs = (req: express.Request, res: express.Response) => {
 return swaggerUi.setup(specs, {
  customCss: ".swagger-ui { background-color: #f0f0f0; }",
  customCssUrl: "../config/swagger/style/customCssUrl.css",
  customSiteTitle: "My API Docs",
 })(req, res, () => {});
};
