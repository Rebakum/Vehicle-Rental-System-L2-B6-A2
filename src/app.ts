import express, { Request, Response } from "express";

import initDB from "./Config/db";
import logger from "./midleware/logger";
import { authRoutes } from "./modules/auth/authRoutes";

import { bookingRoutes } from "./modules/bookings/bookingsRoute";
import { userRoutes } from "./modules/users/usersRoute";
import { vehiclesRoutes } from "./modules/vehicles/vehiclesRoutes";

("./Config/db");

const app = express();

// parser
app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

// initilizingDB
initDB();

app.get("/", logger, (req: Request, res: Response) => {
  res.send("Hello Next level developer!");
});
// user Curd
app.use("/api/v1/users", userRoutes);

// vehicles create
app.use("/api/v1/vehicles", vehiclesRoutes);
// vehicles create
app.use("/api/v1/bookings", bookingRoutes);
// Auth
app.use("/api/v1/auth", authRoutes);
// NOT FOUND
app.use((req, res) => {
  res.status(404).json({
    sucess: false,
    message: "Route Not Found",
    path: req.path,
  });
});

export default app;
