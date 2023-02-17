const express = require('express')
const reqRole = require("../../middlewares/requireRole");
const detailController = require('../../controllers/ChiTiet.controller')
const detailRouter = express.Router()

//API chi tiet loai cong viec
detailRouter.get('/',detailController.getAllDetails())// get all chi tiet
detailRouter.post('/',reqRole('ADMIN'),detailController.createDetail()) // create chi tiet
detailRouter.get('/phan-trang-tim-kiem',detailController.paginate()) // phan trang
detailRouter.get('/:id',detailController.getDetailbyId()) // get chi tiet = id
detailRouter.put('/',reqRole('ADMIN'),detailController.updateDetail()) // update chi tiet
detailRouter.delete('/:id',reqRole('ADMIN'),detailController.deleteDetail()) // xoa

module.exports = detailRouter
