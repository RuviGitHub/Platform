import express from "express";
import CalendarController from "../controllers/CalendarController.js"
import { validate } from '../middlewares/validationMiddleware.js';
import { createCalendarValidationSchema, paginationSchema } from "../validations/validationSchema.js";
import authMiddleware from "../middlewares/authMiddleware.js";

const router = express.Router();
const calendarController = new CalendarController();

router.post("/create-calendar", validate(createCalendarValidationSchema), authMiddleware ,calendarController.createCalendarController);
router.get("/get-all-calendars", validate(paginationSchema), authMiddleware, calendarController.getAllCalendarsPaginatedController);
router.get("/view-calendar", authMiddleware ,calendarController.viewCalendarsController);
router.post("/update-calendar", authMiddleware, calendarController.updateCalendarsController);
router.post("/status-change-calendar", authMiddleware ,calendarController.statusChangeController);

export default router;