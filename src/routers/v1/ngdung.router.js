const express = require('express')
const ngDungController = require('../../controllers/NguoiDung.controller')
const ngDungRouter = express.Router()

//get all nguoi dung
ngDungRouter.get('/',ngDungController.getAllNgDung())
ngDungRouter.post('/',ngDungController.createNgDung())
ngDungRouter.delete('/',ngDungController.deleteNgDung())
ngDungRouter.get('/:id',ngDungController.getNgDungbyId())
module.exports = ngDungRouter