const httpStatus = require('http-status');
const ApiError = require('../helpers/apiError');
const authService = require('../services/authService');
const response = require('../helpers/apiResponse');
const infoLog = require('../config/logger').infoLog;
const redisClient = require('../config/redisClient');

exports.login = async(req, res, next) => {
    
    try {
        
        const { email, password } = req.body;
        //return 1;
        // const var1 = await redisClient.setData('pm','abc');
        // const var2=  await redisClient.getData('pm');
        // infoLog.info(var1);
        // infoLog.info(var2);
   
        //console.log(var2);
        //infoLog.info(JSON.stringify(req.body));
        const token = await authService.verifyUserAndGenerateToken(email,password);
        return response.successResponseWithData(res, "Validated", token);
        //res.status(200).json({ message: "Validated", accessToken : token.accessToken, refreshToken : token.refreshToken });
    } catch (error) {
        return next(error);
    }
}


exports.refreshToken = (req, res, next) => {
    try {
        authService.refreshToken(req, res, next);
    } catch (error) {
        return response.ErrorResponse(res, 'Internal Server Error');
    }
}