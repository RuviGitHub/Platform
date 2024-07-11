import express from "express";
import { validate } from '../middlewares/validationMiddleware.js';
import authMiddleware from "../middlewares/authMiddleware.js";
import widgetController from '../controllers/WidgetController.js';
import { createWidgetSchema, updateWidgetSchema,paginationSchema } from '../validations/validationSchema.js';


const router = express.Router();
const widgetController = new widgetController();

router.post("/create-widget", validate(createWidgetSchema), authMiddleware ,widgetController.createWidgetController);
router.get("/widget-name-check", authMiddleware ,widgetController.widgetNameCheckController);
router.get("/get-all-widget", validate(paginationSchema) ,authMiddleware ,widgetController.getAllWidgetsPaginatedController);
router.get("/update-widget", validate(updateWidgetSchema) ,authMiddleware ,widgetController.updateWidgetController);

export default router;