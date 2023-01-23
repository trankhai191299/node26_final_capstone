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
            console.log(error);
            next(error)
        }
    }
}
const updateBinhLuan = () =>{
    return async(req,res,next)=>{
        try {
            const {user} = res.locals
            const data = req.body
            const updatedCmt = await cmtService.updateBinhLuan(user,data)
            res.status(200).json(response(updatedCmt))
        } catch (error) {
            next(error)
        }
    }
}
const deleteBinhLuan = () =>{
    return async(req,res,next)=>{
        try {
            const {user} = res.locals
            const {id} = req.params
            const listCmt = await cmtService.deleteBinhLuan(user,id)
            res.status(200).json(response(listCmt))
        } catch (error) {
            next(error)
        }
    }
}
const getBinhLuanbyJobId = ()=>{
    return async(req,res,next)=>{
        try {
            const {id} = req.params
            const cmt = await cmtService.getBinhLuanbyJobId(id)
            res.status(200).json(response(cmt))
        } catch (error) {
            next(error)
        }
    }
}
module.exports = {
    getAllBinhLuan,
    createBinhLuan,
    updateBinhLuan,
    deleteBinhLuan,
    getBinhLuanbyJobId
}