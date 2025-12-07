import express from "express";
import auth from "../../midleware/auth";
import logger from "../../midleware/logger";
import { usersControllers } from "./usersController";
const router = express.Router();
router.post("/", usersControllers.createUser);
router.get("/", logger, auth("admin"), usersControllers.getUser);
router.get(
  "/:userId",
  auth("admin", "customar"),
  usersControllers.getSingleUser
);
router.put("/:userId", auth("admin"), usersControllers.UpdatedUser);
router.delete("/:userId", auth("admin"), usersControllers.deletedUser);
export const userRoutes = router;
