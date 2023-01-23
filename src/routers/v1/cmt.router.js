const express = require('express')
const cmtController = require('../../controllers/BinhLuan.controller')
const cmtRouter = express.Router()

// CRUD BinhLuan + get binh luan by cong vc
cmtRouter.get('/',cmtController.getAllBinhLuan())
cmtRouter.post('/',cmtController.createBinhLuan())

module.exports = cmtRouter