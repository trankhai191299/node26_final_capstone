const express = require('express')
const cmtController = require('../../controllers/BinhLuan.controller')
const cmtRouter = express.Router()

// CRUD BinhLuan + get binh luan by cong vc
cmtRouter.get('/',cmtController.getAllBinhLuan())
cmtRouter.post('/',cmtController.createBinhLuan())
cmtRouter.put('/',cmtController.updateBinhLuan())
cmtRouter.delete('/:id',cmtController.deleteBinhLuan())
cmtRouter.get('/lay-binh-luan-theo-cong-viec/:id',cmtController.getBinhLuanbyJobId())

module.exports = cmtRouter