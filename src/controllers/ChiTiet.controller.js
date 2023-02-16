const {response} = require('../helpers/response');
const chiTietService = require('../services/ChiTiet.service')

const getAllDetails = () =>{
    return async(req,res,next)=>{
        try {
            const listDetail = await chiTietService.getAllDetails()
            res.status(200).json(response(listDetail))
        } catch (error) {
            next(error)
        }
    }
}
const createDetail = ()=>{
    return async(req,res,next)=>{
        try {
            const data = req.body
            const createdDetail = await chiTietService.createDetail(data)
            res.status(200).json(response(createdDetail))
        } catch (error) {
            next(error)
        }
    }
}
const getDetailbyId = () =>{
    return async(req,res,next)=>{
        try {
            const {id} = req.params
            const detail = await chiTietService.getDetailbyId(id)
            res.status(200).json(response(detail))
        } catch (error) {
            next(error)
        }
    }
}
const updateDetail = () =>{
    return async(req,res,next)=>{
        try {
            const data = req.body
            const updatedDetail = await chiTietService.updateDetail(data)
            res.status(200).json(response(updatedDetail))
        } catch (error) {
            next(error)
        }
    }
}
const deleteDetail = () =>{
    return async(req,res,next)=>{
        try {
            const {id} = req.params
            const detail = await chiTietService.deleteDetail(id)
            res.status(200).json(response(detail))
        } catch (error) {
            next(error)
        }
    }
}
const paginate = () =>{
    return async(req,res,next)=>{
        try {
            const {page,size} = req.query
            const listDetail = await chiTietService.paginate(page,size)
            res.status(200).json(response(listDetail))
        } catch (error) {
            next(error)
        }
    }
}
module.exports = {
    getAllDetails,
    createDetail,
    getDetailbyId,
    updateDetail,
    deleteDetail,
    paginate
}