const express = require('express')
const authorization = require('../../middlewares/auth');
const authRouter = require('./auth.router');
const detailRouter = require('./chitiet.router');
const cmtRouter = require('./cmt.router');
const congviecRouter = require('./congviec.router');
const jobTypeRouter = require('./jobtype.router');
const ngDungRouter = require('./ngdung.router');
const testRouter = require('./test.router');
const hiredJobRouter = require('./thue.router');
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
//----------//
//loai cong viec
v1.use('/loai-cong-viec',authorization,jobTypeRouter)
//----------//
//chi tiet loai cong viec
v1.use('/chi-tiet-loai-cong-viec',authorization,detailRouter)
//----------//
//thue cong viec
v1.use('/thue-cong-viec',authorization,hiredJobRouter)
//----------//
//test
v1.use('/test',testRouter)
//----------//
module.exports = v1