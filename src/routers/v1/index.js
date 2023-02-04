const express = require('express')
const authorization = require('../../middlewares/auth');
const upload = require('../../middlewares/upload');
const authRouter = require('./auth.router');
const cmtRouter = require('./cmt.router');
const congviecRouter = require('./congviec.router');
const congviec2Router = require('./congviec2.router');
const ngDungRouter = require('./ngdung.router');
const testRouter = require('./test.router');
const v1 = express.Router()
//------------hoang khai------------//
//auth
v1.use('/auth',authRouter)
//----------//
//nguoi dung
v1.use('/users',authorization,ngDungRouter)
//----------//
//binh luan
v1.use('/binhluan',authorization,cmtRouter)
//----------//
//cong viec
v1.use('/congviec',authorization,congviecRouter)
v1.use('/cong-viec',authorization,congviec2Router)
//----------//
//test
v1.use('/test',testRouter)
//----------//
module.exports = v1