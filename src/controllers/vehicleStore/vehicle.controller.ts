import { Request, Response } from "express";
import { VehicleService } from "../../service";
import { logger } from "../../middleware/error/logger";

export const addVehicle = async (req: Request, res: Response) => {
 const { make, model, year } = req.body;
 try {
  const vehicle = await VehicleService.addVehicle(make, model, year);
  res.status(201).json(vehicle);
 } catch (error: any) {
  logger.error(error.message);
  res.status(400).json({ message: error.message });
 }
};

export const getVehicles = (req: Request, res: Response) => {
 // Implementation for getting vehicles
};

export const createVehicle = (req: Request, res: Response) => {
 // Implementation for creating a vehicle
};
