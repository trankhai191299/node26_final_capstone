const {AppError} = require('../helpers/error');
const { ChiTietLoaiCongViec } = require('../models');

const getAllDetails = async()=>{
    try {
        const listDetails = await ChiTietLoaiCongViec.findAll()
        return listDetails
    } catch (error) {
        throw error
    }
}
const createDetail = async(data)=>{
    try {
        const detail = await ChiTietLoaiCongViec.findOne({
            where:{
                tenChiTiet:data.tenChiTiet
            }
        })
        if(detail){
            throw new AppError(401,'detail-job existed')
        }
        const createdDetailJob = await ChiTietLoaiCongViec.create(data)
        return createdDetailJob
    } catch (error) {
        throw error
    }
}
const getDetailbyId = async(detailId)=>{
    try {
        const detail = await ChiTietLoaiCongViec.findOne({
            where:{
                id:detailId
            }
        })
        if(!detail){
            throw new AppError(404,'detail-jobs not found')
        }
        return detail
    } catch (error) {
        throw error
    }
}
const updateDetail = async(data)=>{
    try {
        const detail = await ChiTietLoaiCongViec.findOne({
            where:{
                id:data.id
            }
        })
        if(!detail){
            throw new AppError(404,'detail-job not found')
        }
        await detail.update(data)
        await detail.save()
        return detail
    } catch (error) {
        throw error
    }
}
const deleteDetail = async(detailId)=>{
    try {
        const detail = await ChiTietLoaiCongViec.findOne({
            where:{
                id:detailId
            }
        })
        if(!detail){
            throw new AppError(404,'detail-job not found')
        }
        await ChiTietLoaiCongViec.destroy({
            where:{
                id:detailId
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

        const details = await ChiTietLoaiCongViec.findAndCountAll({
            offset:pageValue * sizeValue,
            limit:sizeValue,
        })
        return ({
            content:details.rows,
            totalPages: Math.ceil(details.count / sizeValue)
        })
    } catch (error) {
        throw error
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