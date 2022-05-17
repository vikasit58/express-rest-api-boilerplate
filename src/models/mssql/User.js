'use strict';
var User = function (sequelize, DataTypes) {
  const UserCollection = sequelize.define('User', {
    UserID: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    AccountEmailAddress: DataTypes.STRING,
    password: DataTypes.STRING,
    CallerID: DataTypes.INTEGER,
    Status: DataTypes.STRING,
    Student: DataTypes.INTEGER,
    Corporate: DataTypes.INTEGER,
    Vendor: DataTypes.INTEGER,
    created: DataTypes.DATE
  }, {
    timestamps: false,
    tableName: 'portal_login'
  });
  User.associate = function(models) {
  };
  return UserCollection;
  
};

module.exports = User;