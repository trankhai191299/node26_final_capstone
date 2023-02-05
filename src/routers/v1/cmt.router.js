const express = require('express')
const cmtController = require('../../controllers/BinhLuan.controller')
const cmtRouter = express.Router()

// API binh luan
cmtRouter.get('/',cmtController.getAllBinhLuan()) // get all binh luan
cmtRouter.post('/',cmtController.createBinhLuan()) // create binh luan
cmtRouter.put('/',cmtController.updateBinhLuan()) // update binh luan
cmtRouter.delete('/:id',cmtController.deleteBinhLuan()) // delete binh luan
cmtRouter.get('/lay-binh-luan-theo-cong-viec/:id',cmtController.getBinhLuanbyJobId()) // get binh luan by job id

module.exports = cmtRouter