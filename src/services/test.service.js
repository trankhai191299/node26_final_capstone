const {NguoiDung} = require('../models');
const {AppError} = require('../helpers/error');

const getProto = async(id) =>{
    try {
        const user = await NguoiDung.findOne({
            where:{
                id:id
            }
        })
        console.log(user.__proto__);
    } catch (error) {
        throw error
    }
}

module.exports = {
    getProto
}