const {AppError} = require('../helpers/error');
const { ThueCongViec } = require('../models');

const getAllHires = async()=>{
    try {
        const listHires = await ThueCongViec.findAll()
        return listHires
    } catch (error) {
        throw error
    }
}
const createHiredJob = async(data)=>{
    try {
        const hiredJob = await ThueCongViec.findOne({
            where:{
                id:data.id
            }
        })
        if(hiredJob){
            throw new AppError(401,'hired-job existed')
        }
        const createdHiredJob = await ThueCongViec.create(data)
        return createdHiredJob
    } catch (error) {
        throw error
    }
}
const getHiredJobbyId = async(hiredId)=>{
    try {
        const hiredJob = await ThueCongViec.findOne({
            where:{
                id:hiredId
            }
        })
        if(!hiredJob){
            throw new AppError(404,'hired-job not found')
        }
        return hiredJob
    } catch (error) {
        throw error
    }
}
const updateHiredJob = async(data)=>{
    try {
        const hiredJob = await ThueCongViec.findOne({
            where:{
                id:data.id
            }
        })
        if(!hiredJob){
            throw new AppError(404,'hired-job not found')
        }
        await hiredJob.update(data)
        await hiredJob.save()
        return hiredJob
    } catch (error) {
        throw error
    }
}
const deleteHiredJob = async(hiredId)=>{
    try {
        const hiredJob = await ThueCongViec.findOne({
            where:{
                id:hiredId
            }
        })
        if(!hiredJob){
            throw new AppError(404,'hired-job not found')
        }
        await ThueCongViec.destroy({
            where:{
                id:hiredId
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

        const hiredJobs = await ThueCongViec.findAndCountAll({
            offset:pageValue * sizeValue,
            limit:sizeValue,
        })
        return ({
            content:hiredJobs.rows,
            totalPages: Math.ceil(hiredJobs.count / sizeValue)
        })
    } catch (error) {
        throw error
    }
}
const hiredJobDone = async(hiredId) =>{
    try {
        const hiredJob = await ThueCongViec.findOne({
            where:{
                id:hiredId
            }
        })
        if(!hiredJob){
            throw new AppError(404,'hired-job not existed')
        }
        if(hiredJob.hoanThanh){
            return "Job has already done"
        }else{
            await hiredJob.update({
                hoanThanh:1
            })
            await hiredJob.save()
            return hiredJob
        }
        
    } catch (error) {
        throw error
    }
}
module.exports = {
    getAllHires,
    createHiredJob,
    getHiredJobbyId,
    updateHiredJob,
    deleteHiredJob,
    paginate,
    hiredJobDone
}