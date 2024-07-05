import express from "express";
import { validate } from '../middlewares/validationMiddleware.js';
import authMiddleware from "../middlewares/authMiddleware.js";
import DazhController from "../controllers/DazhController.js";

const router = express.Router();
const dazhController = new DazhController();

// router.post("/create-def", validate(workspaceDEFValidationSchema), authMiddleware ,defController.createDEFController);
router.get("/widget-name-check", authMiddleware ,dazhController.dazhNameCheckController);
// router.get("/get-all-defs", validate(paginationSchema) ,authMiddleware ,defController.getAllDefsPaginatedController);

export default router;