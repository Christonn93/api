export const userDocs = {
 "/users/register": {
  post: {
   summary: "Register a new user",
   tags: ["Users"],
   requestBody: {
    required: true,
    content: {
     "application/json": {
      schema: {
       type: "object",
       properties: {
        name: { type: "string", example: "John Doe" },
        email: { type: "string", example: "john.doe@example.com" },
        password: { type: "string", example: "SecurePass123!" },
        role: { type: "string", example: "user" },
       },
       required: ["name", "email", "password", "role"],
      },
     },
    },
   },
   responses: {
    201: {
     description: "User registered successfully",
     content: {
      "application/json": {
       example: { message: "User registered successfully" },
      },
     },
    },
    400: {
     description: "Email already exists",
     content: {
      "application/json": {
       example: { message: "Email already exists" },
      },
     },
    },
    500: {
     description: "Internal server error",
     content: {
      "application/json": {
       example: { message: "Internal server error" },
      },
     },
    },
   },
  },
 },

 "/users/login": {
  post: {
   summary: "Log in a user",
   tags: ["Users"],
   requestBody: {
    required: true,
    content: {
     "application/json": {
      schema: {
       type: "object",
       properties: {
        email: { type: "string", example: "john.doe@example.com" },
        password: { type: "string", example: "SecurePass123!" },
       },
       required: ["email", "password"],
      },
     },
    },
   },
   responses: {
    200: {
     description: "Login successful",
     content: {
      "application/json": {
       example: {
        responseData: {
         id: "123e4567-e89b-12d3-a456-426614174000",
         name: "John Doe",
         email: "john.doe@example.com",
         role: "user",
         token: "eyJhbGciOiJIUzI1...",
        },
       },
      },
     },
    },
    400: {
     description: "Invalid credentials",
     content: {
      "application/json": {
       example: { message: "User not found or Invalid password" },
      },
     },
    },
    500: {
     description: "Internal server error",
     content: {
      "application/json": {
       example: { message: "Internal server error" },
      },
     },
    },
   },
  },
 },

 "/users/user": {
  get: {
   summary: "Get all users (protected)",
   tags: ["Users"],
   security: [{ bearerAuth: [] }],
   parameters: [
    {
     name: "id",
     in: "query",
     description: "Filter users by ID",
     schema: { type: "string" },
     example: "123e4567-e89b-12d3-a456-426614174000",
    },
    {
     name: "role",
     in: "query",
     description: "Filter users by role",
     schema: { type: "string" },
     example: "admin",
    },
    {
     name: "name",
     in: "query",
     description: "Filter users by name (partial match)",
     schema: { type: "string" },
     example: "John",
    },
   ],
   responses: {
    200: {
     description: "List of users",
     content: {
      "application/json": {
       example: [
        {
         id: "123e4567-e89b-12d3-a456-426614174000",
         name: "John Doe",
         email: "john.doe@example.com",
         role: "user",
        },
        {
         id: "987e6543-e21b-45d3-a456-123456789abc",
         name: "Jane Smith",
         email: "jane.smith@example.com",
         role: "admin",
        },
       ],
      },
     },
    },
    401: {
     description: "Unauthorized",
     content: {
      "application/json": {
       example: { message: "Unauthorized" },
      },
     },
    },
    500: {
     description: "Internal server error",
     content: {
      "application/json": {
       example: { message: "Internal server error" },
      },
     },
    },
   },
  },
 },
};

export const marketplaceDocs = {
 "/marketplace": {
  post: {
   summary: "Create a new marketplace item",
   tags: ["Marketplace"],
   requestBody: {
    required: true,
    content: {
     "application/json": {
      schema: {
       type: "object",
       properties: {
        userId: { type: "string", example: "123e4567-e89b-12d3-a456-426614174000" },
        title: { type: "string", example: "Gaming Laptop" },
        description: { type: "string", example: "High performance laptop for gaming and development." },
        category: { type: "string", example: "Electronics" },
        price: { type: "number", example: 1500 },
        currency: { type: "string", example: "USD" },
        condition: { type: "string", example: "New" },
        status: { type: "string", example: "Available" },
        images: { type: "array", items: { type: "string" }, example: ["image1.jpg", "image2.jpg"] },
        location: { type: "string", example: "New York, USA" },
        stockQuantity: { type: "number", example: 5 },
        sellerRating: { type: "number", example: 4.8 },
        views: { type: "number", example: 100 },
        wishlistCount: { type: "number", example: 50 },
       },
       required: ["userId", "title", "description", "category", "price", "currency", "condition", "status", "images", "location", "stockQuantity", "sellerRating", "views", "wishlistCount"],
      },
     },
    },
   },
   responses: {
    201: {
     description: "Marketplace item created successfully",
     content: {
      "application/json": {
       example: {
        message: "Marketplace item created successfully",
        marketplaceItem: {
         id: "some-unique-id",
         userId: "123e4567-e89b-12d3-a456-426614174000",
         title: "Gaming Laptop",
         description: "High performance laptop for gaming and development.",
         category: "Electronics",
         price: 1500,
         currency: "USD",
         condition: "New",
         status: "Available",
         images: ["image1.jpg", "image2.jpg"],
         location: "New York, USA",
         stockQuantity: 5,
         sellerRating: 4.8,
         views: 100,
         wishlistCount: 50,
         createdAt: "2025-02-16T00:00:00.000Z",
         updatedAt: "2025-02-16T00:00:00.000Z",
        },
       },
      },
     },
    },
    400: {
     description: "Invalid request data",
     content: {
      "application/json": {
       example: { message: "Invalid request data" },
      },
     },
    },
    500: {
     description: "Internal server error",
     content: {
      "application/json": {
       example: { message: "Internal server error" },
      },
     },
    },
   },
  },
 },

 "/marketplace/{id}": {
  get: {
   summary: "Get a specific marketplace item by ID",
   tags: ["Marketplace"],
   parameters: [
    {
     name: "id",
     in: "path",
     description: "ID of the marketplace item to retrieve",
     required: true,
     schema: { type: "string", example: "some-unique-id" },
    },
   ],
   responses: {
    200: {
     description: "Marketplace item retrieved successfully",
     content: {
      "application/json": {
       example: {
        id: "some-unique-id",
        userId: "123e4567-e89b-12d3-a456-426614174000",
        title: "Gaming Laptop",
        description: "High performance laptop for gaming and development.",
        category: "Electronics",
        price: 1500,
        currency: "USD",
        condition: "New",
        status: "Available",
        images: ["image1.jpg", "image2.jpg"],
        location: "New York, USA",
        stockQuantity: 5,
        sellerRating: 4.8,
        views: 100,
        wishlistCount: 50,
        createdAt: "2025-02-16T00:00:00.000Z",
        updatedAt: "2025-02-16T00:00:00.000Z",
       },
      },
     },
    },
    404: {
     description: "Marketplace item not found",
     content: {
      "application/json": {
       example: { message: "Marketplace item not found" },
      },
     },
    },
    500: {
     description: "Internal server error",
     content: {
      "application/json": {
       example: { message: "Internal server error" },
      },
     },
    },
   },
  },

  put: {
   summary: "Update a specific marketplace item by ID",
   tags: ["Marketplace"],
   parameters: [
    {
     name: "id",
     in: "path",
     description: "ID of the marketplace item to update",
     required: true,
     schema: { type: "string", example: "some-unique-id" },
    },
   ],
   requestBody: {
    required: true,
    content: {
     "application/json": {
      schema: {
       type: "object",
       properties: {
        title: { type: "string", example: "Updated Gaming Laptop" },
        description: { type: "string", example: "Updated description of the gaming laptop." },
        price: { type: "number", example: 1600 },
        status: { type: "string", example: "Sold" },
        stockQuantity: { type: "number", example: 4 },
       },
      },
     },
    },
   },
   responses: {
    200: {
     description: "Marketplace item updated successfully",
     content: {
      "application/json": {
       example: {
        message: "Marketplace item updated successfully",
        marketplaceItem: {
         id: "some-unique-id",
         title: "Updated Gaming Laptop",
         description: "Updated description of the gaming laptop.",
         price: 1600,
         status: "Sold",
         stockQuantity: 4,
         updatedAt: "2025-02-16T01:00:00.000Z",
        },
       },
      },
     },
    },
    404: {
     description: "Marketplace item not found",
     content: {
      "application/json": {
       example: { message: "Marketplace item not found" },
      },
     },
    },
    500: {
     description: "Internal server error",
     content: {
      "application/json": {
       example: { message: "Internal server error" },
      },
     },
    },
   },
  },

  delete: {
   summary: "Delete a specific marketplace item by ID",
   tags: ["Marketplace"],
   parameters: [
    {
     name: "id",
     in: "path",
     description: "ID of the marketplace item to delete",
     required: true,
     schema: { type: "string", example: "some-unique-id" },
    },
   ],
   responses: {
    200: {
     description: "Marketplace item deleted successfully",
     content: {
      "application/json": {
       example: { message: "Marketplace item deleted successfully" },
      },
     },
    },
    404: {
     description: "Marketplace item not found",
     content: {
      "application/json": {
       example: { message: "Marketplace item not found" },
      },
     },
    },
    500: {
     description: "Internal server error",
     content: {
      "application/json": {
       example: { message: "Internal server error" },
      },
     },
    },
   },
  },
 },
};

export const newspaperDocs = {
 "/newspapers": {
  post: {
   summary: "Create a new newspaper entry",
   tags: ["Newspapers"],
   requestBody: {
    required: true,
    content: {
     "application/json": {
      schema: {
       type: "object",
       properties: {
        userId: { type: "string", example: "user123" },
        title: { type: "string", example: "Breaking News" },
        content: { type: "string", example: "This is the content of the newspaper." },
        publishedAt: { type: "string", format: "date-time", example: "2025-02-16T12:00:00Z" },
        category: { type: "string", example: "Politics" },
        tags: { type: "array", items: { type: "string" }, example: ["Politics", "Breaking"] },
        status: { type: "string", example: "Published" },
        likes: { type: "number", example: 100 },
        comments: { type: "array", items: { type: "string" }, example: ["Great article!", "Very informative."] },
        views: { type: "number", example: 1500 },
        editorApproved: { type: "boolean", example: true },
        featured: { type: "boolean", example: false },
       },
       required: ["userId", "title", "content", "publishedAt", "category", "tags", "status"],
      },
     },
    },
   },
   responses: {
    201: {
     description: "Newspaper created successfully",
     content: {
      "application/json": {
       example: {
        message: "Newspaper created successfully",
        newspaper: {
         id: "some-unique-id",
         userId: "user123",
         title: "Breaking News",
         content: "This is the content of the newspaper.",
         publishedAt: "2025-02-16T12:00:00Z",
         category: "Politics",
         tags: ["Politics", "Breaking"],
         status: "Published",
         likes: 100,
         comments: ["Great article!", "Very informative."],
         views: 1500,
         editorApproved: true,
         featured: false,
         createdAt: "2025-02-16T12:00:00Z",
         updatedAt: "2025-02-16T12:00:00Z",
        },
       },
      },
     },
    },
    500: {
     description: "Internal server error",
     content: {
      "application/json": {
       example: { message: "Failed to create newspaper" },
      },
     },
    },
   },
  },
 },

 "/newspapers/{id}": {
  get: {
   summary: "Get a single newspaper by ID",
   tags: ["Newspapers"],
   parameters: [
    {
     name: "id",
     in: "path",
     description: "ID of the newspaper",
     required: true,
     schema: { type: "string", example: "some-unique-id" },
    },
   ],
   responses: {
    200: {
     description: "Newspaper found",
     content: {
      "application/json": {
       example: {
        id: "some-unique-id",
        userId: "user123",
        title: "Breaking News",
        content: "This is the content of the newspaper.",
        publishedAt: "2025-02-16T12:00:00Z",
        category: "Politics",
        tags: ["Politics", "Breaking"],
        status: "Published",
        likes: 100,
        comments: ["Great article!", "Very informative."],
        views: 1500,
        editorApproved: true,
        featured: false,
        createdAt: "2025-02-16T12:00:00Z",
        updatedAt: "2025-02-16T12:00:00Z",
       },
      },
     },
    },
    404: {
     description: "Newspaper not found",
     content: {
      "application/json": {
       example: { message: "Newspaper not found" },
      },
     },
    },
    500: {
     description: "Internal server error",
     content: {
      "application/json": {
       example: { message: "Failed to retrieve newspaper" },
      },
     },
    },
   },
  },
  put: {
   summary: "Update a newspaper by ID",
   tags: ["Newspapers"],
   parameters: [
    {
     name: "id",
     in: "path",
     description: "ID of the newspaper to update",
     required: true,
     schema: { type: "string", example: "some-unique-id" },
    },
   ],
   requestBody: {
    required: true,
    content: {
     "application/json": {
      schema: {
       type: "object",
       properties: {
        userId: { type: "string", example: "user123" },
        title: { type: "string", example: "Updated Breaking News" },
        content: { type: "string", example: "Updated content of the newspaper." },
        publishedAt: { type: "string", format: "date-time", example: "2025-02-16T12:00:00Z" },
        category: { type: "string", example: "Politics" },
        tags: { type: "array", items: { type: "string" }, example: ["Politics", "Updated"] },
        status: { type: "string", example: "Draft" },
        likes: { type: "number", example: 120 },
        comments: { type: "array", items: { type: "string" }, example: ["Updated article!"] },
        views: { type: "number", example: 1600 },
        editorApproved: { type: "boolean", example: true },
        featured: { type: "boolean", example: true },
       },
       required: ["title", "content", "publishedAt", "category", "tags", "status"],
      },
     },
    },
   },
   responses: {
    200: {
     description: "Newspaper updated successfully",
     content: {
      "application/json": {
       example: { message: "Newspaper updated successfully" },
      },
     },
    },
    404: {
     description: "Newspaper not found",
     content: {
      "application/json": {
       example: { message: "Newspaper not found" },
      },
     },
    },
    500: {
     description: "Internal server error",
     content: {
      "application/json": {
       example: { message: "Failed to update newspaper" },
      },
     },
    },
   },
  },

  delete: {
   summary: "Delete a newspaper by ID",
   tags: ["Newspapers"],
   parameters: [
    {
     name: "id",
     in: "path",
     description: "ID of the newspaper to delete",
     required: true,
     schema: { type: "string", example: "some-unique-id" },
    },
   ],
   responses: {
    200: {
     description: "Newspaper deleted successfully",
     content: {
      "application/json": {
       example: { message: "Newspaper deleted successfully" },
      },
     },
    },
    404: {
     description: "Newspaper not found",
     content: {
      "application/json": {
       example: { message: "Newspaper not found" },
      },
     },
    },
    500: {
     description: "Internal server error",
     content: {
      "application/json": {
       example: { message: "Failed to delete newspaper" },
      },
     },
    },
   },
  },
 },
};
