import express from "express";
import { validate } from '../middlewares/validationMiddleware.js';
import authMiddleware from "../middlewares/authMiddleware.js";
import WidgetController from "../controllers/WidgetController.js";

const router = express.Router();
const widgetController = new WidgetController();

router.post("/create-widget", validate(workspaceDEFValidationSchema), authMiddleware ,widgetController.createWidgetController);
router.get("/widget-name-check", authMiddleware ,widgetController.widgetNameCheckController);
router.get("/get-all-widget", validate(paginationSchema) ,authMiddleware ,widgetController.getAllWidgetsPaginatedController);
router.get("/update-widget", validate(paginationSchema) ,authMiddleware ,widgetController.updateWidgetController);

export default router;