export const config = {
 app: {
  port: process.env.PORT || 3000,
  secretKey: process.env.SECRET_KEY || "your-secret-key",
 },
 db: {
  host: process.env.DB_HOST || "localhost",
  user: process.env.DB_USER || "root",
  password: process.env.DB_PASSWORD || "password",
  database: process.env.DB_NAME || "mydatabase",
 },
};
