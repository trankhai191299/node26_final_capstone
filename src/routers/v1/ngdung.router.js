const express = require('express')
const ngDungController = require('../../controllers/NguoiDung.controller')
const ngDungRouter = express.Router()
const reqRole = require("../../middlewares/requireRole");
//get all nguoi dung
ngDungRouter.get('/',ngDungController.getAllNgDung())
ngDungRouter.post('/',reqRole('ADMIN'),ngDungController.createNgDung())
ngDungRouter.delete('/',reqRole('ADMIN'),ngDungController.deleteNgDung())
ngDungRouter.get('/:id',ngDungController.getNgDungbyId())
ngDungRouter.put('/',ngDungController.updateNgDung())
ngDungRouter.get('/search/:keyword',ngDungController.searchNgDung())

module.exports = ngDungRouter