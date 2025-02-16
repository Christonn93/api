import swaggerJsdoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";
import { marketplaceDocs, newspaperDocs, userDocs } from "./swaggerDocs";

const options: swaggerJsdoc.Options = {
 definition: {
  openapi: "3.0.0",
  info: {
   title: "Your API",
   version: "1.0.0",
   description: "API documentation for your project",
  },
  servers: [
   {
    url: "http://localhost:3000/api/v1",
    description: "Development server",
   },
  ],
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
  paths: {
   ...userDocs,
   ...marketplaceDocs,
   ...newspaperDocs,
  },
 },
 apis: [],
};

export const specs = swaggerJsdoc(options);
export { swaggerUi };
