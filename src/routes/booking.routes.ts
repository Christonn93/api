import express from "express";
import { createBooking, getBookings } from "../controllers/booking.controller";

export const router = express.Router();

router.post("/booking/create", createBooking);
router.get("/booking/all", getBookings);
router.get("/booking/:id", getBooking);
