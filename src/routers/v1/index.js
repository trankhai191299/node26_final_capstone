const express = require('express')
const authorization = require('../../middlewares/auth');
const reqRole = require("../../middlewares/requireRole");
const upload = require('../../middlewares/upload');
const authRouter = require('./auth.router')
const v1 = express.Router()

v1.use('/auth',authRouter)

module.exports = v1