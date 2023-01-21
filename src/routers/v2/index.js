const express = require('express')
const authorization = require('../../middlewares/auth');
const reqRole = require("../../middlewares/requireRole");
const upload = require('../../middlewares/upload');
const v2 = express.Router()
//------------xuan truong------------//
module.exports = v2