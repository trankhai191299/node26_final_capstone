const ngDungService = require('../services/NguoiDung.service')
const {response} = require('../helpers/response');

const getAllNgDung = () =>{
    return async(req,res,next)=>{
        try {
            const users = await ngDungService.getAllNgDung()
            res.status(200).json(response(users))
        } catch (error) {
            next(error)
        }
    }
}
const createNgDung = () =>{
    return async(req,res,next)=>{
        try {
            const data = req.body
            const createUser = await ngDungService.createNgDung(data)
            res.status(200).json(response(createUser))
        } catch (error) {
            next(error)
        }
    }
}
const deleteNgDung = () =>{
    return async(req,res,next)=>{
        try {
            const {id} = req.body
            await ngDungService.deleteNgDung(id)
            res.status(200).json(response('delete success'))
        } catch (error) {
            console.log(error);
            next(error)
        }
    }
}
const getNgDungbyId = () =>{
    return async(req,res,next)=>{
        try {
            const {id} = req.params
            const user = await ngDungService.getNgDungbyId(id)
            res.status(200).json(response(user))
        } catch (error) {
            next(error)
        }
    }
}
module.exports = {
    getAllNgDung,
    createNgDung,
    deleteNgDung,
    getNgDungbyId,
}