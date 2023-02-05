const express = require('express')
const ngDungController = require('../../controllers/NguoiDung.controller')
const ngDungRouter = express.Router()
const upload = require('../../middlewares/upload');
const reqRole = require("../../middlewares/requireRole");

//API nguoi dung
ngDungRouter.get('/',ngDungController.getAllNgDung()) // get all ng dung
ngDungRouter.post('/',reqRole('ADMIN'),ngDungController.createNgDung()) // create ng dung
ngDungRouter.post('/upload-avatar',upload.single('file'),ngDungController.uploadImg()) // upload avatar
ngDungRouter.delete('/',reqRole('ADMIN'),ngDungController.deleteNgDung()) // delete ng dung
ngDungRouter.get('/phan-trang-tim-kiem',ngDungController.paginate()) // phan trang
ngDungRouter.get('/:id',ngDungController.getNgDungbyId()) // get ng dung by id
ngDungRouter.put('/',ngDungController.updateNgDung()) // update ng dung
ngDungRouter.get('/search/:keyword',ngDungController.searchNgDung()) // search ng dung theo ten


module.exports = ngDungRouter