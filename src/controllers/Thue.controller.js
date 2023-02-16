const {response} = require('../helpers/response');
const thueCongViecService = require('../services/Thue.service')

const getAllHiredJobs = () =>{
    return async(req,res,next)=>{
        try {
            const listHiredJob = await thueCongViecService.getAllHires()
            res.status(200).json(response(listHiredJob))
        } catch (error) {
            next(error)
        }
    }
}
const createHiredJob = ()=>{
    return async(req,res,next)=>{
        try {
            const data = req.body
            const createdHiredJob = await thueCongViecService.createHiredJob(data)
            res.status(200).json(response(createdHiredJob))
        } catch (error) {
            next(error)
        }
    }
}
const getHiredJobbyId = () =>{
    return async(req,res,next)=>{
        try {
            const {id} = req.params
            const hiredJob = await thueCongViecService.getHiredJobbyId(id)
            res.status(200).json(response(hiredJob))
        } catch (error) {
            next(error)
        }
    }
}
const updateHiredJob = () =>{
    return async(req,res,next)=>{
        try {
            const data = req.body
            const updatedHiredJob = await thueCongViecService.updateHiredJob(data)
            res.status(200).json(response(updatedHiredJob))
        } catch (error) {
            next(error)
        }
    }
}
const deleteHiredJob = () =>{
    return async(req,res,next)=>{
        try {
            const {id} = req.params
            const hiredJob = await thueCongViecService.deleteHiredJob(id)
            res.status(200).json(response(hiredJob))
        } catch (error) {
            next(error)
        }
    }
}
const paginate = () =>{
    return async(req,res,next)=>{
        try {
            const {page,size} = req.query
            const listHiredJob = await thueCongViecService.paginate(page,size)
            res.status(200).json(response(listHiredJob))
        } catch (error) {
            next(error)
        }
    }
}
module.exports = {
    getAllHiredJobs,
    createHiredJob,
    getHiredJobbyId,
    updateHiredJob,
    deleteHiredJob,
    paginate
}