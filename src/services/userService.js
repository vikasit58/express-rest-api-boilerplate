const httpStatus = require('http-status');
const ApiError = require('../helpers/apiError');
const User = require( '../models/mssql/index').User;
const Sequelize = require('sequelize');
const Op = Sequelize.Op

/**
 * Get user by email
 * @param {string} email
 * @returns {Promise<User>}
 */

 exports.getUserByEmail = async (email) => {
    return await User.findOne({
        where: {
           AccountEmailAddress: email
        }
     });
  };
