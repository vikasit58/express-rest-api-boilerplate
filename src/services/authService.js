const httpStatus = require('http-status');
const ApiError = require('../helpers/apiError');
const dashLogger = require('../config/logger');

const userService = require('./userService');
const tokenService = require('./tokenService');
exports.verifyUserAndGenerateToken = async (email, password) => {

     try {  
            const userResponse = await userService.getUserByEmail(email);
            var result = JSON.parse(JSON.stringify(userResponse));
            if(result.length === 0) {
               return response.successResponseWithData([], 'User Not Found');
            }
            const cus_password = result.password.trim(); 
            const req_password = password.trim();
            if(cus_password == req_password){
               return tokens = await tokenService.generateAuthTokens(email);
            } else {
               throw new ApiError(httpStatus.UNAUTHORIZED, 'Incorrect email or password');
            }

     } catch (error) {
         throw new ApiError(httpStatus.UNAUTHORIZED, 'Incorrect email or password');
     }
}


exports.refreshToken = (req, res, next) => {
   try {

      var { refreshToken } = req.body;
      var decoded = jwt.verify(refreshToken, '098876543');
      var token = jwt.sign({ data: decoded }, '123456790', { expiresIn: '60s' });
      res.status(200).json({ message: "New token generated", tok : token, refreshToken : refreshToken });

   } catch (error) {
      return response.ErrorResponse(res, 'Internal Server Error');
   }
}