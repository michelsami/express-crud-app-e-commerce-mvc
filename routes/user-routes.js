import express from 'express';
import { registrationProcess } from '../controllers/user-controller/registration-controller.js';
import { validateRegister } from '../middlewares/validators/register-validation-middleware.js';
import { loginProcess } from '../controllers/user-controller/login-controller.js';
import { validatelogin } from '../middlewares/validators/login-validation-middleware.js';



export const userRouter = express.Router();




userRouter.post('/registration',validateRegister, registrationProcess)
userRouter.post('/login',validatelogin, loginProcess)



