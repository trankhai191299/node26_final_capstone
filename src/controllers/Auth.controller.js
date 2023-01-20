const {response} = require('../helpers/response');
const authService = require('../services/Auth.service');

const signup = () =>{
    return async(req,res,next)=>{
        try {
            const data = req.body;
            const createdUser = await authService.signup(data);
            res.status(200).json(response(createdUser))
        } catch (error) {
            next(error)
        }
    }
}
const signin = () =>{
    return async(req,res,next)=>{
        try {
            const data = req.body
            const user = await authService.signin(data)
            res.status(200).json(response(user))
        } catch (error) {
            next(error)
        }
    }
}
module.exports = {
    signup,
    signin
}