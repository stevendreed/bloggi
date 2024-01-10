const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Post extends Model {}

Post.init(
    {
        id: {

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
