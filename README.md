# Social Media API

This is a simple Social Media API built with Node.js, Express, and TypeScript. The API allows users to create posts, comment on posts, and like or dislike posts and comments. Users can also view their posts and interact with content, similar to social media platforms like Facebook and Reddit.

## Features

- **User Registration and Login**
  - Users can register and log in to access the API.
  - JWT Authentication is used to secure routes.

- **Posts**
  - Users can create, like, and dislike posts.
  - Posts can contain multiple comments.
  - Each post tracks the number of likes and dislikes.

- **Comments**
  - Users can comment on posts.
  - Comments can also be liked or disliked.
  - Comments can be nested (replies to comments) for a rich discussion flow.

## Prerequisites

To run this API locally, you need to have the following installed:

- Node.js (v14.x or later)
- npm or yarn
- TypeScript (optional but recommended for development)

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/your-username/social-media-api.git
cd social-media-api
```

### 2. Install dependencies

Run the following command to install the required dependencies:

```bash
npm install
```

### 3. Set environment variables

Create a `.env` file at the root of the project and add the following:

```env
JWT_SECRET=your_secret_key
PORT=5000
```

- `JWT_SECRET` is the secret key used for JWT signing.
- `PORT` is the port on which the API will run (default is `5000`).

### 4. Run the application

Once the dependencies are installed and environment variables are set, you can start the server:

```bash
npm run dev
```

This will start the application in development mode using `ts-node`.

### 5. API Endpoints

#### User Authentication

- **POST `/auth/register`**  
  Register a new user.  
  Request body:

  ```json
  {
    "email": "user@example.com",
    "password": "password123"
  }
  ```

- **POST `/auth/login`**  
  Log in to the system. Returns a JWT token.  
  Request body:

  ```json
  {
    "email": "user@example.com",
    "password": "password123"
  }
  ```

#### User Routes

- **GET `/users/:id`**  
  Get a user by ID.

- **GET `/users/:id/posts`**  
  Get all posts of a user.

#### Post Routes

- **POST `/post`**  
  Create a post.  
  Request body:

  ```json
  {
    "userId": "userId123",
    "content": "This is a new post!"
  }
  ```

- **PUT `/users/:userId/post/:postId/like`**  
  Like a post.

- **PUT `/users/:userId/post/:postId/dislike`**  
  Dislike a post.

#### Comment Routes

- **POST `/users/:userId/post/:postId/comment`**  
  Add a comment to a post.  
  Request body:

  ```json
  {
    "content": "This is a comment"
  }
  ```

- **PUT `/users/:userId/post/:postId/comment/:commentId/like`**  
  Like a comment.

- **PUT `/users/:userId/post/:postId/comment/:commentId/dislike`**  
  Dislike a comment.

## Running Tests

If you want to run tests, you can use a testing framework like `Jest` or `Mocha`. Currently, this project does not have tests, but you can easily set up test cases for the controllers and routes.

## Directory Structure

```
├── controllers
│   └── userController.ts      # Contains the logic for handling user operations (e.g., create post, like post)
├── middleware
│   └── authMiddleware.ts      # JWT Authentication middleware
│   └── logger.ts              # Logging middleware
├── models
│   └── UserModel.ts           # User and Post models
├── routes
│   └── userRoutes.ts          # User-related API routes
│   └── authRoutes.ts          # Authentication API routes
├── .env                       # Environment variables
├── server.ts                  # Entry point for the application
├── tsconfig.json              # TypeScript configuration
├── package.json               # Project dependencies and scripts
└── README.md                  # Project documentation
```

## Contributing

Contributions are welcome! Feel free to fork the repository and submit a pull request with your changes.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
