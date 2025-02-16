import winston from "winston";

const logFormat = winston.format.printf(({ timestamp, level, message, meta }) => {
 return `[${timestamp}] : [${meta || "N/A"}] : ${message}`;
});

export const logger = winston.createLogger({
 level: "info",
 format: winston.format.combine(winston.format.timestamp(), logFormat),
 transports: [new winston.transports.Console({ format: winston.format.simple() }), new winston.transports.File({ filename: "logs/app.log" })],
});
