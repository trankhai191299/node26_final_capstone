const {response} = require('../helpers/response');
const testService = require('../services/test.service');

const getProto = () =>{
    return async(req,res,next)=>{
        try {
            const {id} = req.params
            const user = await testService.getProto(id)
            res.status(200).json(response(user))
        } catch (error) {
            next(error)
        }
    }
}

module.exports = {
    getProto
}