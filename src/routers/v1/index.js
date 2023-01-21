const express = require('express')
const authorization = require('../../middlewares/auth');
const reqRole = require("../../middlewares/requireRole");
const upload = require('../../middlewares/upload');
const authRouter = require('./auth.router')
const ngDungRouter = require('./ngdung.router')
const v1 = express.Router()

//auth
v1.use('/auth',authRouter)
//----------//
//nguoi dung
v1.use('/users',ngDungRouter)

//----------//
module.exports = v1