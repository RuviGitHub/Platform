import express from "express";
import { validate } from '../middlewares/validationMiddleware.js';
import authMiddleware from "../middlewares/authMiddleware.js";
import WidgetController from "../controllers/WidgetController.js";

const router = express.Router();
const widgetController = new WidgetController();

// router.post("/create-def", validate(workspaceDEFValidationSchema), authMiddleware ,defController.createDEFController);
router.get("/widget-name-check", authMiddleware ,widgetController.widgetNameCheckController);
// router.get("/get-all-defs", validate(paginationSchema) ,authMiddleware ,defController.getAllDefsPaginatedController);

export default router;