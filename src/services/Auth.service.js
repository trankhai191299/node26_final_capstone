const {NguoiDung} = require('../models');
const {AppError} = require('../helpers/error');
const bcrypt = require("bcrypt");
const { generateToken } = require("../helpers/jwt");
const signup = async(data) =>{
    try {
        const user = await NguoiDung.findOne({
            where:{
                email:data.email
            }
        });
        if(user){
            throw new AppError(401,'email existed')
        };
        const createdUser = await NguoiDung.create(data);
        return createdUser
    } catch (error) {
        throw error
    }
};
const signin = async(data) =>{
    try {
        const {email,password} = data;
        const user = await NguoiDung.findOne({
            where:{
                email
            },
            attributes:{
                include:['password'],
            },
        });
        if(!user){
            throw new AppError(400,'Email or password invalid');
        };
        const isMatched = bcrypt.compareSync(password,user.password);
        if(!isMatched){
            throw new AppError(400,'Email or password invalid');
        };
        
        return generateToken(user);
    } catch (error) {
        throw error
    }
}
module.exports = {
    signup,
    signin
}