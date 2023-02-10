const express = require('express')
const reqRole = require("../../middlewares/requireRole");
const jobTypeController = require('../../controllers/LoaiCongViec.controller')
const jobTypeRouter = express.Router()

//API loai cong viec
jobTypeRouter.get('/',jobTypeController.getAllJobType())
jobTypeRouter.post('/',reqRole('ADMIN'),jobTypeController.createJobType())
jobTypeRouter.get('/phan-trang-tim-kiem',jobTypeController.paginate())
jobTypeRouter.get('/:id',jobTypeController.getJobTypebyId())
jobTypeRouter.put('/',reqRole('ADMIN'),jobTypeController.updateJobType())
jobTypeRouter.delete('/:id',reqRole('ADMIN'),jobTypeController.deleteJobType())

module.exports = jobTypeRouter
