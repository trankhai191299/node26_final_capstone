const {response} = require('../helpers/response');
const cmtService = require('../services/BinhLuan.service');

const getAllBinhLuan = () =>{
    return async(req,res,next)=>{
        try {
            const cmt = await cmtService.getAllBinhLuan()
            res.status(200).json(response(cmt))
        } catch (error) {
            next(error)
        }
    }
}
const createBinhLuan = () =>{
    return async(req,res,next)=>{
        try {
            const data = req.body
            const createdCmt = await cmtService.createBinhLuan(data)
            res.status(200).json(response(createdCmt))
        } catch (error) {
            next(error)
        }
    }
}
module.exports = {
    getAllBinhLuan,
    createBinhLuan
}