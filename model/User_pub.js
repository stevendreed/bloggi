/*
   User_pub | for public information about a user only, as a method of distancing
   important information like emails & hashed passwords
*/
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class User_pub extends Model {}

Post.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        // @TODO: add hooks
        hooks: {
        },
        sequelize,
        timestamps: true,
        freezeTableNames: true,
        underscored: true,
        modelName: 'user_pub'
    }, // end attributes
);

module.exports = User_pub;
