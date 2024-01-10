/*
   User_pub | for public information about a user only, as a method of distancing
   important information like emails & hashed passwords
*/
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class User_pub extends Model {}

Post.init(
    {
        display_name: {
            type: DataTypes.STRING,
            allowNull: false,
            primaryKey: true
        },
        user_bio: {
            type: DataTypes.JSON
        },
        user_id:{
            type: DataTypes.INTEGER,
            references: {
                model: 'user',
                key: 'id'
            }
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
