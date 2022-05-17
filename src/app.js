const express = require('express');
const bodyParser = require('body-parser');
const httpStatus = require('http-status');
const responseAPI = require('./helpers/apiResponse');
const helmet = require('helmet');
const { errorConverter, errorHandler } = require('./middleware/error');
const ApiError = require('./helpers/apiError');
//require('./config/redisClient');
require('dotenv').config();
require('./config/mongoose');
require('./config/sequilize');
const app = express();



// set security HTTP headers
app.use(helmet());

// parse json request body
app.use(bodyParser.json());
 
app.use(bodyParser.urlencoded({
    extended: true
}));



// import routes
const authRoute = require('./routes/v1/authRoute');
app.use(authRoute);
//app.use(require('./routes/v1/'))
//app.use('/auth', routes);

// send back a 404 error for any unknown api request
// app.use((req, res, next) => {
//   const error = new Error();
//   error.statusCode = 404;
//   error.message = "Requested API Not found"
//   next(error);
// });

// app.use((error, req, res, next) => {
//   const status = error.statusCode || 500;
//   const message = error.message || "internal server error";
//   return responseAPI.notFoundResponse(res, message);
// });

// send back a 404 error for any unknown api request
app.use((req, res, next) => {
  next(new ApiError(httpStatus.NOT_FOUND, 'Requested API Not found'));
});

// convert error to ApiError, if needed
app.use(errorConverter);

// handle error
app.use(errorHandler);

module.exports = app;