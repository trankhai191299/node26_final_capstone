const express = require('express')
const reqRole = require("../../middlewares/requireRole");
const conviecController = require('../../controllers/CongViec.controller')
const congviecRouter = express.Router()


congviecRouter.get('/',conviecController.getAllCv())
congviecRouter.post('/',conviecController.createCv())
congviecRouter.get('/:id',conviecController.getCvById())
congviecRouter.put('/:id',conviecController.updateCv())
congviecRouter.delete('/:id',conviecController.deleteCv())
module.exports = congviecRouter