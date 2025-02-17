export const authDocs = {
 paths: {
  "/register": {
   post: {
    summary: "Register a new user",
    description: "Register a user by providing an email and password",
    tags: ["Authentication"], // Added category for grouping
    parameters: [
     {
      in: "body",
      name: "body",
      required: true,
      schema: {
       type: "object",
       properties: {
        email: { type: "string", example: "user@example.com" },
        password: { type: "string", example: "securePassword123" },
       },
      },
     },
    ],
    responses: {
     201: {
      description: "User successfully created",
      schema: {
       type: "object",
       properties: {
        message: { type: "string", example: "User created" },
        user: {
         type: "object",
         properties: {
          id: { type: "integer", example: 1 },
          email: { type: "string", example: "user@example.com" },
         },
        },
       },
      },
     },
     400: {
      description: "Missing required fields",
      schema: {
       type: "object",
       properties: {
        message: { type: "string", example: "All fields are required" },
       },
      },
     },
     500: {
      description: "Internal server error",
      schema: {
       type: "object",
       properties: {
        message: { type: "string", example: "Error creating user" },
       },
      },
     },
    },
   },
  },
  "/login": {
   post: {
    summary: "Login a user",
    description: "Authenticate user by email and password, and return JWT token",
    tags: ["Authentication"], // Added category for grouping
    parameters: [
     {
      in: "body",
      name: "body",
      required: true,
      schema: {
       type: "object",
       properties: {
        email: { type: "string", example: "user@example.com" },
        password: { type: "string", example: "securePassword123" },
       },
      },
     },
    ],
    responses: {
     200: {
      description: "User authenticated successfully",
      schema: {
       type: "object",
       properties: {
        token: { type: "string", example: "JWT_TOKEN" },
       },
      },
     },
     401: {
      description: "Invalid credentials",
      schema: {
       type: "object",
       properties: {
        message: { type: "string", example: "Invalid credentials" },
       },
      },
     },
    },
   },
  },
  "/refresh": {
   post: {
    summary: "Refresh authentication token",
    description: "Use refresh token to get a new JWT token",
    tags: ["Authentication"], // Added category for grouping
    parameters: [
     {
      in: "cookie",
      name: "refreshToken",
      required: true,
      type: "string",
     },
    ],
    responses: {
     200: {
      description: "Token refreshed successfully",
      schema: {
       type: "object",
       properties: {
        token: { type: "string", example: "JWT_TOKEN" },
       },
      },
     },
     403: {
      description: "Unauthorized or invalid refresh token",
      schema: {
       type: "object",
       properties: {
        message: { type: "string", example: "Unauthorized" },
       },
      },
     },
    },
   },
  },
  "/logout": {
   post: {
    summary: "Logout the user",
    description: "Clear the refresh token and log the user out",
    tags: ["Authentication"], // Added category for grouping
    responses: {
     200: {
      description: "Successfully logged out",
      schema: {
       type: "object",
       properties: {
        message: { type: "string", example: "Logged out" },
       },
      },
     },
    },
   },
  },
 },
};
