# Node.js API with PostgreSQL & Authentication

## Overview

This project is a REST API built with **Node.js**, **Express**, and **PostgreSQL**, using **Prisma ORM** for database management. It includes user authentication with **JWT** and **session-based authentication**.

## Features

- **User Authentication** (Register, Login, Logout, Token Refresh)
- **Password Hashing** with bcrypt
- **JWT Authentication**
- **Session Management**
- **PostgreSQL Database** with Prisma ORM
- **CORS & Cookie Handling**

---

## Setup & Installation

### 1️⃣ Prerequisites

Ensure you have **Node.js** and **PostgreSQL** installed:

```sh
node -v
npm -v
psql --version
```

---

### 2️⃣ Install Dependencies

Run the following command:

```sh
npm install
```

If using TypeScript, install types:

```sh
npm install --save-dev @types/express @types/cookie-parser @types/jsonwebtoken @types/bcryptjs @types/node @types/cors
```

### 3️⃣ Configure Environment Variables

Create a `.env` file in the root directory:

```env
DATABASE_URL="postgresql://your-user:your-password@your-host:your-port/your-db"
SESSION_SECRET="your-secret-key"
JWT_SECRET="your-jwt-secret"
```

### 4️⃣ Initialize Prisma

Run:

```sh
npx prisma migrate dev --name init
```

---

### 5️⃣ Start the Server

For development:

```sh
npm run dev
```

For production:

```sh
npm start
```

## API Endpoints

### 🔹 **Register User**

**POST** `/auth/register`

```json
{
  "email": "test@example.com",
  "password": "password123"
}
```

### 🔹 **Login User**

**POST** `/auth/login`

```json
{
  "email": "test@example.com",
  "password": "password123"
}
```

### 🔹 **Refresh Token**

**POST** `/auth/refresh`

### 🔹 **Logout**

**POST** `/auth/logout`

## Deployment

1. Deploy to **Render** or **Vercel**.
2. Set up **PostgreSQL** on the hosting provider.
3. Update `.env` with the production database URL.
4. Secure cookies and authentication for production.

## License

MIT License

## Author

Built with ❤️ using **TypeScript, Express, and Prisma**.
