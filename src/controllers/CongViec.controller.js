const {response} = require('../helpers/response');
const jobService = require('../services/CongViec.service')

const getAllCv = () =>{
    return async(req,res,next)=>{
        try {
            const listCv = await jobService.getAllCv()
            res.status(200).json(response(listCv))
        } catch (error) {
            next(error)
        }
    }
}
const createCv = () =>{
    return async(req,res,next)=>{
        try {
            const data = req.body
            const listCv = await jobService.createCv(data)
            res.status(200).json(response(listCv))
        } catch (error) {
            next(error)
        }
    }
}
const getCvById = () =>{
    return async(req,res,next)=>{
        try {
            const {id} = req.params
            const job = await jobService.getCvById(id)
            res.status(200).json(response(job))
        } catch (error) {
            next(error)
        }
    }
}
const updateCv = () =>{
    return async(req,res,next)=>{
        try {
            const {id} = req.params
            const {user} = res.locals
            const data = req.body
            const updatedJob = await jobService.updateCv(user,id,data)
            res.status(200).json(response(updatedJob))
        } catch (error) {
            next(error)
        }
    }
}
const deleteCv = () =>{
    return async(req,res,next)=>{
        try {
            const {id} = req.params
            const {user} = res.locals
            const msg = await jobService.deleteCv(user,id)
            res.status(200).json(response(msg))
        } catch (error) {
            next(error)
        }
    }
}
const getMenuLoaiCv = () =>{
    return async(req,res,next)=>{
        try {
            const menu = await jobService.getMenuLoaiCv()
            res.status(200).json(response(menu))
        } catch (error) {
            next(error)
        }
    }
}
const getDetailsbyType = () =>{
    return async(req,res,next)=>{
        try {
            const {id} = req.params
            const details = await jobService.getDetailsbyType(id)
            res.status(200).json(response(details))
        } catch (error) {
            next(error)
        }
    }
}
const getCvbyDetail = () =>{
    return async(req,res,next)=>{
        try {
            const {id} = req.params
            const details = await jobService.getCvbyDetail(id)
            res.status(200).json(response(details))
        } catch (error) {
            next(error)
        }
    }
}
const searchCv = () =>{
    return async(req,res,next)=>{
        try {
            const {keyword} = req.params
            const listCv = await jobService.searchCv(keyword)
            res.status(200).json(response(listCv))
        } catch (error) {
            next(error)
        }
    }
}
const paginate = () =>{
    return async(req,res,next)=>{
        try {
            const {page,size} = req.query
            const listJob = await jobService.paginate(page,size)
            res.status(200).json(response(listJob))
        } catch (error) {
            next(error)
        }
    }
}
const uploadImg = () =>{
    return async(req,res,next)=>{
        try {
            const {user} = res.locals
            const {jobId} = req.params
            const file = req.file
            if(!file){
                next(new AppError(400,'Missing file'));
            };
            const updatedJob = await jobService.uploadImg(file,user,jobId)
            res.status(200).json(response(updatedJob))
        } catch (error) {
            next(error)
        }
    }
}
module.exports = {
    getAllCv,
    createCv,
    getCvById,
    updateCv,
    deleteCv,
    getMenuLoaiCv,
    getDetailsbyType,
    getCvbyDetail,
    searchCv,
    paginate,
    uploadImg
}