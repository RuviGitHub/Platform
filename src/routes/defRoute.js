import express from "express";
import { validate } from '../middlewares/validationMiddleware.js';
import { workspaceDEFValidationSchema, paginationSchema } from "../validations/validationSchema.js";
import authMiddleware from "../middlewares/authMiddleware.js";
import DEFController from "../controllers/DEFController.js";

const router = express.Router();
const defController = new DEFController();

router.post("/create-def", validate(workspaceDEFValidationSchema), authMiddleware ,defController.createDEFController);
router.get("/def-name-check", authMiddleware ,defController.defNameCheckController);
router.get("/get-all-defs", validate(paginationSchema) ,authMiddleware ,defController.getAllDefsPaginatedController);
router.get("/update-def", authMiddleware ,defController.updateDEFController);

export default router;