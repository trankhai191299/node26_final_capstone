const express = require('express')
const reqRole = require("../../middlewares/requireRole");
const jobTypeController = require('../../controllers/LoaiCongViec.controller')
const jobTypeRouter = express.Router()

//API loai cong viec
jobTypeRouter.get('/',jobTypeController.getAllJobType())// get all loai cong viec
jobTypeRouter.post('/',reqRole('ADMIN'),jobTypeController.createJobType()) // create loai cong viec
jobTypeRouter.get('/phan-trang-tim-kiem',jobTypeController.paginate()) // phan trang
jobTypeRouter.get('/:id',jobTypeController.getJobTypebyId()) // get loai cong viec = id
jobTypeRouter.put('/',reqRole('ADMIN'),jobTypeController.updateJobType()) // update loai cong viec
jobTypeRouter.delete('/:id',reqRole('ADMIN'),jobTypeController.deleteJobType()) // delete

module.exports = jobTypeRouter
