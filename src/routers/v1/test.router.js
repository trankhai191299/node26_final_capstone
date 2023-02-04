const express = require('express')
const testController = require('../../controllers/test.controller')
const testRouter = express.Router()

testRouter.get('/:id',testController.getProto())

module.exports = testRouter