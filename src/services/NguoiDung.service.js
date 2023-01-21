const {NguoiDung} = require('../models');
const {AppError} = require('../helpers/error');

const getAllNgDung = async() =>{
    try {
        const users = await NguoiDung.findAll();
        return users
    } catch (error) {
        throw error
    }
}
const createNgDung = async(data) =>{
    try {
        const user = await NguoiDung.findOne({
            where:{
                email:data.email
            }
        })
        if(user){
            throw new AppError(401,'email existed')
        }
        const createdUser = await NguoiDung.create(data)
        return createdUser
    } catch (error) {
        throw error
    }
}
const deleteNgDung = async(userId)=>{
    try {
        const user = await NguoiDung.findOne({
            where:{
                id:userId
            }
        })
        if(!user){
            throw new AppError(404,'user not found')
        }
        await NguoiDung.destroy({
            where:{
                id:userId
            }
        })
    } catch (error) {
        throw error
    }
}
const getNgDungbyId = async(userId)=>{
    try {
        const user = await NguoiDung.findOne({
            where:{
                id:userId
            }
        })
        if(!user){
            throw new AppError(404,'user not found')
        }
        return user
    } catch (error) {
        throw error
    }
}

module.exports = {
    getAllNgDung,
    createNgDung,
    deleteNgDung,
    getNgDungbyId,
}