const Sequelize = require('sequelize');
require('dotenv').config();

let sequelize;

// local deployment
sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PW,
    {
        host: 'localhost',
        dialect: 'mysql',
        port: 3306
    }
);

sequelize
    .authenticate()
        .then(() => {
            console.log(`Connection to ${process.env.DB_NAME} as ${process.env.DB_USER} successful!`);
        })
        .catch(err => {
            console.log(`${err} | failed to connect to ${process.env.DB_NAME} as ${process.env.DB_USER}`);
        });

module.exports = sequelize;