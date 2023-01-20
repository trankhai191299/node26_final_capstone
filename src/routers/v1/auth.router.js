const express = require('express')
const authController = require('../../controllers/Auth.controller');
const authRouter = express.Router()

// sign up - sign in
authRouter.post('/signup',authController.signup())
authRouter.post('/signin',authController.signin())

module.exports = authRouter