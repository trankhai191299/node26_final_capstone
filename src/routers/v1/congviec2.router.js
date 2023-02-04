const express = require('express')
const conviecController = require('../../controllers/CongViec.controller')
const congviec2Router = express.Router()

congviec2Router.get('/lay-menu-loai-cong-viec',conviecController.getMenuLoaiCv())
congviec2Router.get('/lay-chi-tiet-loai-cong-viec/:id',conviecController.getDetailsbyType())
congviec2Router.get('/lay-cong-viec-theo-chi-tiet-loai/:id',conviecController.getCvbyDetail())
congviec2Router.get('/lay-danh-sach-cong-viec-theo-ten/:keyword',conviecController.searchCv())

module.exports = congviec2Router