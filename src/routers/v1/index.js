const express = require('express')
const authorization = require('../../middlewares/auth');
const reqRole = require("../../middlewares/requireRole");
const upload = require('../../middlewares/upload');
const authRouter = require('./auth.router');
const cmtRouter = require('./cmt.router');
const ngDungRouter = require('./ngdung.router')
const v1 = express.Router()
//------------hoang khai------------//
//auth
v1.use('/auth',authRouter)
//----------//
//nguoi dung
v1.use('/users',ngDungRouter)
//----------//
//binh luan
v1.use('/binhluan',cmtRouter)
//----------//
module.exports = v1