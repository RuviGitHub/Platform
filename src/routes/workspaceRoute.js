import express from "express";
import WorkspaceController from "../controllers/WorkspaceController.js";
import authMiddleware from "../middlewares/authMiddleware.js";
import { validate } from "../middlewares/validationMiddleware.js";
import { registerWorkspaceValidationSchema , workspaceBillingDetailsSchema} from "../validations/validationSchema.js";

const router = express.Router();
const workspaceController = new WorkspaceController();

// router.post("/create-workspace", validate(createWorkspaceValidationSchema), workspaceController.createWorkspaceController);
router.get("/workspace-name-check", workspaceController.workspaceNameCheckController);
router.post("/register-workspace", validate(registerWorkspaceValidationSchema), workspaceController.registerWorkspaceController);
// router.get("/start-free-trail",  workspaceController.startFreeTrailController);
// router.post("/start-premium-package",validate(workspaceBillingDetailsSchema) ,authMiddleware,  workspaceController.startPremiumPackageController);


export default router;
