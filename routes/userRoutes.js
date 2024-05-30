import express from "express";
import { loginUser, logoutUser, registerUser, refreshToken } from "../controllers/userControllers";


export const userRouter = express.Router()

userRouter.post('/login-user', loginUser)
userRouter.post('/register-user', registerUser)
userRouter.get('/logout-user', logoutUser)
userRouter.post('/refresh-token', refreshToken)

