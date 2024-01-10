const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Post extends Model {}

Post.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        author:
        {
            type: DataTypes.STRING, // chart is wrong: this references display name
            references: {
                model: user_pub,
                key: display_name
            }
        },
        // @TODO: add hooks
        hooks: {
        },
        sequelize,
        timestamps: true,
        freezeTableNames: true,
        underscored: true,
        modelName: post
    }, // end attributes
);

module.exports = Post;
