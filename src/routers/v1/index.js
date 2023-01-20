const express = require('express')
const authorization = require('../../middlewares/auth');
const reqRole = require("../../middlewares/requireRole");
const upload = require('../../middlewares/upload');
const v1 = express.Router();




module.exports = v1
