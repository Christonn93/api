import swaggerJsdoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";
import { authDocs } from "./swaggerDocs";

const options: swaggerJsdoc.Options = {
 definition: {
  openapi: "3.0.0",
  info: {
   title: "Development Api",
   version: "1.0.0",
   description: "API documentation for your project",
  },
  components: {
   securitySchemes: {
    bearerAuth: {
     type: "http",
     scheme: "bearer",
     bearerFormat: "JWT",
    },
   },
  },
  security: [{ bearerAuth: [] }],
  tags: [
   {
    name: "Authentication", // Name of the tag
    description: "Authentication-related endpoints", // Tag description
   },
  ],
  paths: {
   ...authDocs.paths,
  },
 },
 basePath: "/api/v1",
 host: "localhost:5000",
 apis: ["./routes/**/*.ts", "./models/**/*.ts"],
 schemes: ["https", "http"],
};

export const specs = swaggerJsdoc(options);
export { swaggerUi };
