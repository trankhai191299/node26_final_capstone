const express = require('express')
const hiredJobController = require('../../controllers/Thue.controller')
const hiredJobRouter = express.Router()

//API thue cong viec
hiredJobRouter.get('/',hiredJobController.getAllHiredJobs())
hiredJobRouter.post('/',hiredJobController.createHiredJob())
hiredJobRouter.get('/phan-trang-tim-kiem',hiredJobController.paginate())
hiredJobRouter.get('/:id',hiredJobController.getHiredJobbyId())
hiredJobRouter.put('/',hiredJobController.updateHiredJob())
hiredJobRouter.delete('/:id',hiredJobController.deleteHiredJob())

module.exports = hiredJobRouter
