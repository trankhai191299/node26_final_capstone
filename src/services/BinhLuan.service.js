const {AppError} = require('../helpers/error');
const {BinhLuan, NguoiDung} = require('../models')

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
const updateBinhLuan = async(data)=>{

}
module.exports = {
    getAllBinhLuan,
    createBinhLuan,
    updateBinhLuan
}