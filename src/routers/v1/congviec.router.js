const express = require('express')
const conviecController = require('../../controllers/CongViec.controller')
const congviecRouter = express.Router()

// API cong viec
congviecRouter.get('/',conviecController.getAllCv())
congviecRouter.post('/',conviecController.createCv())
congviecRouter.get('/phan-trang-tim-kiem',conviecController.paginate())
congviecRouter.get('/lay-menu-loai-cong-viec',conviecController.getMenuLoaiCv())
congviecRouter.get('/lay-chi-tiet-loai-cong-viec/:id',conviecController.getDetailsbyType())
congviecRouter.get('/lay-cong-viec-theo-chi-tiet-loai/:id',conviecController.getCvbyDetail())
congviecRouter.get('/lay-danh-sach-cong-viec-theo-ten/:keyword',conviecController.searchCv())
congviecRouter.get('/:id',conviecController.getCvById())
congviecRouter.put('/:id',conviecController.updateCv())
congviecRouter.delete('/:id',conviecController.deleteCv())
module.exports = congviecRouter