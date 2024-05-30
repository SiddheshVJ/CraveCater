import asyncHandler from "express-async-handler";
import jwt from "jsonwebtoken";
import crypto from 'crypto'
import uniqid from 'uniqid'
import { response } from "express";


export const registerUser = asyncHandler(async (req, res) => {
    res.send('Register')
})

export const loginUser = asyncHandler(async (req, res) => {
    res.send('Login')
})

export const logoutUser = asyncHandler(async (req, res) => {
    res.send('Logout')
})

export const refreshToken = asyncHandler(async (req, res) => {
    res.send('refreshToken')
})





