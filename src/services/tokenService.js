const httpStatus = require('http-status');
const ApiError = require('../helpers/apiError');
const jwt= require('jsonwebtoken');
require('dotenv').config();
/**
 * Generate auth tokens
 * @param {User} user
 * @returns {Promise<Object>}
 */
 exports.generateAuthTokens = async (email) => {
     try{
        const accessToken = jwt.sign({ email:email }, process.env.ACCESS_TOKEN_SECRET, { expiresIn: process.env.ACCESS_TOKEN_EXPIRY });
        const refreshToken = jwt.sign({ email: email }, process.env.REFRESH_TOKEN_SECRET, { expiresIn: process.env.REFRESH_TOKEN_EXPIRY } );
        return {
            accessToken: accessToken,
            refreshToken: refreshToken
        };

     }catch (error) {
         //return response.ErrorResponse(res, 'Internal Server Error5');
     }
    
  };
