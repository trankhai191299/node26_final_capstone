const {AppError} = require('../helpers/error');
const { LoaiCongViec } = require('../models');

const getAllJobType = async()=>{
    try {
        const listTypes = await LoaiCongViec.findAll()
        return listTypes
    } catch (error) {
        throw error
    }
}
const createJobType = async(data)=>{
    try {
        const jobType = await LoaiCongViec.findOne({
            where:{
                tenLoaiCongViec:data.tenLoaiCongViec
            }
        })
        if(jobType){
            throw new AppError(401,'job-type existed')
        }
        const createdJobType = await LoaiCongViec.create(data)
        return createdJobType
    } catch (error) {
        throw error
    }
}
const getJobTypebyId = async(jTId)=>{
    try {
        const jobType = await LoaiCongViec.findOne({
            where:{
                id:jTId
            }
        })
        if(!jobType){
            throw new AppError(404,'job-type not found')
        }
        return jobType
    } catch (error) {
        throw error
    }
}
const updateJobType = async(data)=>{
    try {
        const jobType = await LoaiCongViec.findOne({
            where:{
                id:data.id
            }
        })
        if(!jobType){
            throw new AppError(404,'job-type not found')
        }
        await jobType.update(data)
        await jobType.save()
        return jobType
    } catch (error) {
        throw error
    }
}
const deleteJobType = async(jTId)=>{
    try {
        const jobType = await LoaiCongViec.findOne({
            where:{
                id:jTId
            }
        })
        if(!jobType){
            throw new AppError(404,'job-type not found')
        }
        await LoaiCongViec.destroy({
            where:{
                id:jTId
            }
        })
        return "delete successfully"
    } catch (error) {
        throw error
    }
}
const paginate = async(page,size)=>{
    try {
        const pageAsNum = Number.parseInt(page)
        const sizeAsNum = Number.parseInt(size)
        
        let pageValue = 0
        if(!Number.isNaN(pageAsNum) && pageAsNum>0){
            pageValue = pageAsNum
        }else if(Number.isNaN(pageAsNum)){
            throw new AppError(400,'bad request')
        }
        let sizeValue = 10
        if(!Number.isNaN(sizeAsNum)&&sizeAsNum>0&&sizeAsNum<10){
            sizeValue = sizeAsNum
        }else if(Number.isNaN(sizeAsNum)){
            throw new AppError(400,'bad request')
        }

        const jobTypes = await LoaiCongViec.findAndCountAll({
            offset:pageValue * sizeValue,
            limit:sizeValue,
        })
        return ({
            content:jobTypes.rows,
            totalPages: Math.ceil(jobTypes.count / sizeValue)
        })
    } catch (error) {
        throw error
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