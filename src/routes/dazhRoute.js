import express from "express";
import { validate } from '../middlewares/validationMiddleware.js';
import authMiddleware from "../middlewares/authMiddleware.js";
import DazhController from "../controllers/DazhController.js";
import { paginationSchema,createdazhschema,updatedazhschema} from '../validations/validationSchema.js';


const router = express.Router();
const dazhController = new DazhController();

router.post("/create-dazh", validate(createdazhschema), authMiddleware ,dazhController.createDazhController);
router.get("/dazh-name-check", authMiddleware ,dazhController.dazhNameCheckController);
router.get("/get-all-dazh", validate(paginationSchema) ,authMiddleware ,dazhController.getAllDazhsPaginatedController);
router.get("/update-dazh", validate(updatedazhschema) ,authMiddleware ,dazhController.updateDazhController);

export default router;