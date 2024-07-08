import express from "express";
import UserController from '../controllers/UserController.js';
import authMiddleware from '../middlewares/authMiddleware.js';
import { validate } from '../middlewares/validationMiddleware.js';
import { loginUserValidationSchema, paginationSchema, registerUserValidationSchema } from '../validations/validationSchema.js';

const router = express.Router();
const userController = new UserController();

router.get('/verify-email', userController.verifyEmailController);
router.get('/verify-otp', userController.verifyOTPController);
router.post('/login', validate(loginUserValidationSchema), userController.loginController);
router.get('/reset-password', userController.resetPassowrdController);
router.post('/update-password', userController.updatePassowrdController);
router.get('/auth', authMiddleware, userController.authController);
router.get('/invite-user', authMiddleware, userController.inviteUserController);
router.get('/get-all-users', validate(paginationSchema), authMiddleware, userController.getAllUsersPaginatedController);
router.get('/register-user', validate(registerUserValidationSchema), userController.registerUserController);

export default router;
