const {AppError} = require('../helpers/error');
const {BinhLuan, NguoiDung, CongViec} = require('../models')

const getAllBinhLuan = async() =>{
    try {
        const cmt = await BinhLuan.findAll()
        return cmt
        
    } catch (error) {
        throw error
    }
}
const createBinhLuan = async(data)=>{
    try {
        const job = await CongViec.findOne({
            where:{
                id:data.maCongViec
            }
        })
        if(!job){
            throw new AppError(404,"job not found")
        }
        const user = await NguoiDung.findOne({
            where:{
                id:data.maNguoiBinhLuan
            }
        })
        if(!user){
            throw new AppError(404,"user not found")
        }
        const createdCmt = await BinhLuan.create(data)
        return createdCmt
    } catch (error) {
        throw error
    }
}
const updateBinhLuan = async(requester,data)=>{
    try {
        const job = await CongViec.findOne({
            where:{
                id:data.maCongViec
            }
        })
        const requesterFound = await NguoiDung.findOne({
            where:{
                id:requester.id
            }
        })
        const cmt = await BinhLuan.findOne({
            where:{
                id:data.id
            }
        })
        if(!job){
            throw new AppError(404,"job not found")
        }
        if(!requesterFound){
            throw new AppError(404,"user not found")
        }
        if(!cmt){
            throw new AppError(404,"comment not found")
        }
        if(requester.id !== data.maNguoiBinhLuan){
            throw new AppError(403,"No Permission")
        }
        await cmt.set(data)
        await cmt.save()
        return cmt;
    } catch (error) {
        throw error
    }
}
const deleteBinhLuan = async(requester,cmtId)=>{
    try {
        const cmt = await BinhLuan.findOne({
            where:{
                id:cmtId
            }
        })
        if(!cmt){
            throw new AppError(404,'comment not found')
        }
        if(requester.id !== cmt.maNguoiBinhLuan){
            throw new AppError(403,'no permission')
        }
        await BinhLuan.destroy({
            where:{
                id:cmtId
            }
        })
        return "delete success"
    } catch (error) {
        throw error
    }
}
const getBinhLuanbyJobId = async(jobId) =>{
    try {
        let finalCmt = []
        const listCmt = await BinhLuan.findAll()
        jobId = parseInt(jobId)
        for(const cmt of listCmt){
            if(cmt.maCongViec === jobId){
                finalCmt.push(cmt)
            }
        }
        return finalCmt
    } catch (error) {
        throw error
    }
}
module.exports = {
    getAllBinhLuan,
    createBinhLuan,
    updateBinhLuan,
    deleteBinhLuan,
    getBinhLuanbyJobId
}