const {response} = require('../helpers/response');
const jobTypeService = require('../services/LoaiCongViec.service')

const getAllJobType = () =>{
    return async(req,res,next)=>{
        try {
            const listJobType = await jobTypeService.getAllJobType()
            res.status(200).json(response(listJobType))
        } catch (error) {
            next(error)
        }
    }
}
const createJobType = ()=>{
    return async(req,res,next)=>{
        try {
            const data = req.body
            const createdJobType = await jobTypeService.createJobType(data)
            res.status(200).json(response(createdJobType))
        } catch (error) {
            next(error)
        }
    }
}
const getJobTypebyId = () =>{
    return async(req,res,next)=>{
        try {
            const {id} = req.params
            const jobType = await jobTypeService.getJobTypebyId(id)
            res.status(200).json(response(jobType))
        } catch (error) {
            next(error)
        }
    }
}
const updateJobType = () =>{
    return async(req,res,next)=>{
        try {
            const data = req.body
            const updatedJobType = await jobTypeService.updateJobType(data)
            res.status(200).json(response(updatedJobType))
        } catch (error) {
            next(error)
        }
    }
}
const deleteJobType = () =>{
    return async(req,res,next)=>{
        try {
            const {id} = req.params
            const jobType = await jobTypeService.deleteJobType(id)
            res.status(200).json(response(jobType))
        } catch (error) {
            next(error)
        }
    }
}
const paginate = () =>{
    return async(req,res,next)=>{
        try {
            const {page,size} = req.query
            const listJobType = await jobTypeService.paginate(page,size)
            res.status(200).json(response(listJobType))
        } catch (error) {
            next(error)
        }
    }
}
module.exports = {
    getAllJobType,
    createJobType,
    getJobTypebyId,
    updateJobType,
    deleteJobType,
    paginate
}