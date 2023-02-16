const express = require('express')
const reqRole = require("../../middlewares/requireRole");
const detailController = require('../../controllers/ChiTiet.controller')
const detailRouter = express.Router()

//API chi tiet loai cong viec
detailRouter.get('/',detailController.getAllDetails())
detailRouter.post('/',reqRole('ADMIN'),detailController.createDetail())
detailRouter.get('/phan-trang-tim-kiem',detailController.paginate())
detailRouter.get('/:id',detailController.getDetailbyId())
detailRouter.put('/',reqRole('ADMIN'),detailController.updateDetail())
detailRouter.delete('/:id',reqRole('ADMIN'),detailController.deleteDetail())

module.exports = detailRouter
