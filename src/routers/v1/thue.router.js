const express = require('express')
const hiredJobController = require('../../controllers/Thue.controller')
const hiredJobRouter = express.Router()

//API thue cong viec
hiredJobRouter.get('/',hiredJobController.getAllHiredJobs()) // get all thue cong viec
hiredJobRouter.post('/',hiredJobController.createHiredJob()) // create thue cong viec
hiredJobRouter.get('/phan-trang-tim-kiem',hiredJobController.paginate()) // phan trang
hiredJobRouter.get('/:id',hiredJobController.getHiredJobbyId()) // get thue cong viec = id
hiredJobRouter.put('/',hiredJobController.updateHiredJob()) // update thue cong viec
hiredJobRouter.delete('/:id',hiredJobController.deleteHiredJob()) // delete thue cong viec

module.exports = hiredJobRouter
