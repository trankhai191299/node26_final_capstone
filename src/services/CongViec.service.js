const {CongViec, NguoiDung, LoaiCongViec, ChiTietLoaiCongViec} = require('../models')
const {AppError} = require('../helpers/error');

const getAllCv = async()=>{
    try {
        const listCv = await CongViec.findAll()
        return listCv
    } catch (error) {
        throw error
    }
}
const createCv = async(data)=>{
    try {
        const createdCv = await CongViec.create(data)
        return createdCv
    } catch (error) {
        // console.log(error);
        throw error
    }
}
const getCvById = async(jobId)=>{
    try {
        const job = await CongViec.findOne({
            where:{
                id:jobId
            }
        })
        if(!job){
            throw new AppError(404,'job not found')
        }
        return job
    } catch (error) {
        throw error
    }
}
const updateCv = async(requester,jobId,data)=>{
    try {
        const user = await NguoiDung.findOne({
            where:{
                id:requester.id
            }
        })
        if(!user){
            throw new AppError(404,'user not found')
        }
        const job1 = await CongViec.findOne({
            where:{
                id:jobId
            }
        })
        if(!job1){
            throw new AppError(404,'job not found')
        }
        const job2 = await CongViec.findOne({
            where:{
                id:data.id
            }
        })
        if(!job2){
            throw new AppError(404,'job not found')
        }
        if(job1.id !== job2.id){
            throw new AppError(403,'no permission')
        }
        if(user.id !== job2.nguoiTao){
            throw new AppError(403,'no permission')
        }
        if (job1.id === null||job2.id=== null) {
            throw new AppError(404,'please insert job')
        }
        await job1.update(data)
        await job1.save()
        return job1
    } catch (error) {
        throw error
    }
}
const deleteCv = async(requester,jobId)=>{
    try {
        const user = await NguoiDung.findOne({
            where:{
                id:requester.id
            }
        })
        if(!user){
            throw new AppError(404,'user not found')
        }
        const job = await CongViec.findOne({
            where:{
                id:jobId
            }
        })
        if(!job){
            throw new AppError(404,'job not found')
        }
        await CongViec.destroy({
            where:{
                id:jobId
            }
        })
        return "delete successfully"
    } catch (error) {
        throw error
    }
}
const getMenuLoaiCv = async()=>{
    try {
        const menu = await CongViec.findAll({
            include:{
                model:ChiTietLoaiCongViec,
                include:LoaiCongViec
            }
        })
        return menu
    } catch (error) {
        throw error
    }
}
const getDetailsbyType = async(typeId)=>{
    try {
        const type = await LoaiCongViec.findOne({
            where:{
                id:typeId
            },
            include:ChiTietLoaiCongViec
        })
        if(!type){
            throw new AppError(404,"type not found")
        }
        return type
    } catch (error) {
        throw error
    }
}
const getCvbyDetail = async(detailId)=>{
    try {
        const detail = await ChiTietLoaiCongViec.findOne({
            where:{
                id:detailId
            },
            include:[
            {
                model:LoaiCongViec
            },
            {
                model:CongViec,
                include:NguoiDung
            }
        ]
            
        })
        if(!detail){
            throw new AppError(404,'detail not found')
        }
        return detail
    } catch (error) {
        throw error
    }
}
const searchCv = async(keyword)=>{
    try {
        const listCv = await CongViec.findAll({
            where:{
                tenCongViec:sequelize.where(
                    sequelize.fn("LOWER",sequelize.col("ten_cong_viec")),
                    "LIKE",
                    "%" + keyword + "%"
                )
            },
            include:ChiTietLoaiCongViec
        })
        if(listCv.length === 0){
            return "no search found"
        }
        return listCv
    } catch (error) {
        throw error
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
    searchCv
}