/*
   User.js - sequelize class file that expands on the Model class
*/

const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class User extends Model {}

User.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allownull: false,
            primaryKey: true,
            autoIncrement: true
        },
        password: {
            type: DataTypes.STRING, // password will be encrypted w/ bcrypt
            allowNull: false,
            validate: {
                len: [8]
            }
        },
        user_email: {
            type: DataTypes.STRING, 
            allowNull: false,
            validate:{
                isEmail: true
            }
        },
        // include a check for is_active before performing user ops as a hook
        is_active: {
            type: DataTypes.BOOLEAN,
            defaultValue: true
        }
    }
)