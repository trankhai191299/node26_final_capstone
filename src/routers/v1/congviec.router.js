const express = require('express')
const conviecController = require('../../controllers/CongViec.controller')
const congviecRouter = express.Router()

// API cong viec
congviecRouter.get('/',conviecController.getAllCv()) // get all cong viec
congviecRouter.post('/',conviecController.createCv()) // create cong viec
congviecRouter.get('/phan-trang-tim-kiem',conviecController.paginate()) // phan trang
congviecRouter.get('/lay-menu-loai-cong-viec',conviecController.getMenuLoaiCv()) // get menu loai cong viec
congviecRouter.get('/lay-chi-tiet-loai-cong-viec/:id',conviecController.getDetailsbyType()) // get chi tiet theo ma loai cv
congviecRouter.get('/lay-cong-viec-theo-chi-tiet-loai/:id',conviecController.getCvbyDetail()) // get cv theo ma chi tiet
congviecRouter.get('/lay-danh-sach-cong-viec-theo-ten/:keyword',conviecController.searchCv()) // get cong viec theo ten
congviecRouter.get('/:id',conviecController.getCvById()) // get cv by id
congviecRouter.put('/:id',conviecController.updateCv()) // update cv
congviecRouter.delete('/:id',conviecController.deleteCv()) // delete cv
module.exports = congviecRouter