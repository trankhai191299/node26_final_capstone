const express = require('express')
const ngDungController = require('../../controllers/NguoiDung.controller')
const ngDungRouter = express.Router()
const upload = require('../../middlewares/upload');
const reqRole = require("../../middlewares/requireRole");

//API nguoi dung
ngDungRouter.get('/',ngDungController.getAllNgDung())
ngDungRouter.post('/',reqRole('ADMIN'),ngDungController.createNgDung())
ngDungRouter.post('/upload-avatar',upload.single('file'),ngDungController.uploadImg())
ngDungRouter.delete('/',reqRole('ADMIN'),ngDungController.deleteNgDung())
ngDungRouter.get('/phan-trang-tim-kiem',ngDungController.paginate())
ngDungRouter.get('/:id',ngDungController.getNgDungbyId())
ngDungRouter.put('/',ngDungController.updateNgDung())
ngDungRouter.get('/search/:keyword',ngDungController.searchNgDung())


module.exports = ngDungRouter