const express = require('express')
const upload = require('../../middlewares/upload');
const congviecController = require('../../controllers/CongViec.controller')
const congviecRouter = express.Router()

// API cong viec
congviecRouter.get('/',congviecController.getAllCv()) // get all cong viec
congviecRouter.post('/',congviecController.createCv()) // create cong viec
congviecRouter.post('/upload-hinh-cong-viec/:jobId',upload.single('file'),congviecController.uploadImg()) // upload anh cong viec
congviecRouter.get('/phan-trang-tim-kiem',congviecController.paginate()) // phan trang
congviecRouter.get('/lay-menu-loai-cong-viec',congviecController.getMenuLoaiCv()) // get menu loai cong viec
congviecRouter.get('/lay-chi-tiet-loai-cong-viec/:id',congviecController.getDetailsbyType()) // get chi tiet theo ma loai cv
congviecRouter.get('/lay-cong-viec-theo-chi-tiet-loai/:id',congviecController.getCvbyDetail()) // get cv theo ma chi tiet
congviecRouter.get('/lay-danh-sach-cong-viec-theo-ten/:keyword',congviecController.searchCv()) // get cong viec theo ten
congviecRouter.get('/:id',congviecController.getCvById()) // get cv by id
congviecRouter.put('/:id',congviecController.updateCv()) // update cv
congviecRouter.delete('/:id',congviecController.deleteCv()) // delete cv
module.exports = congviecRouter