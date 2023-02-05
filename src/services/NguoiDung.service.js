const {NguoiDung, sequelize} = require('../models');
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
const updateNgDung = async(request,updateData)=>{
    try {
        const requester = await NguoiDung.findOne({
            where:{
                id:request.id
            }
        })
        if (!requester) {
            throw new AppError(404,'user not found')
        }
        if(request.id !== updateData.id){
            throw new AppError(403,'no permission')
        }
        await requester.set(updateData)
        return requester
    } catch (error) {
        console.log(error);
        throw error
    }
}
const searchNgDung = async(keyword)=>{
    try {
        const users = await NguoiDung.findAll({
            where:{
                name:sequelize.where(
                    sequelize.fn("LOWER",sequelize.col("name")),
                    "LIKE",
                    "%" + keyword + "%"
                )
            }
        })
        if(users.length === 0){
            return "no search found"
        }
        return users
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
        const users = await NguoiDung.findAndCountAll({
            offset:pageValue * sizeValue,
            limit:sizeValue,
        })
        return ({
            content:users.rows,
            totalPages: Math.ceil(users.count / sizeValue)
        })
    } catch (error) {
        throw error
    }
} 
const uploadImg = async(file,user)=>{
    try {
        console.log(file);
        let link = `http://localhost:4000/${file.path}`
        const userFound = await NguoiDung.findOne({
            where:{
                id:user.id
            }
        })
        await userFound.update({
            avatar: link
        })
        await userFound.save()
        return userFound
    } catch (error) {
        throw error
    }
}
module.exports = {
    getAllNgDung,
    createNgDung,
    deleteNgDung,
    getNgDungbyId,
    updateNgDung,
    searchNgDung,
    paginate,
    uploadImg
}