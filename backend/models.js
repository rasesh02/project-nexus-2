const { Sequelize, DataTypes } = require("sequelize");
const sequelize = new Sequelize('test', 'root', 'RaNa!001', {
    host: 'localhost',
    dialect: 'mysql'
});
const User = sequelize.define('User', {
    name:{
        type: DataTypes.STRING,
        allowNull:false,
        defaultValue: ""
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        
    },
    password: {
        type: DataTypes.STRING,
        allowNull: true
    }
});
sequelize.sync()
    .then(() => {
        console.log('User table created successfully.');
    })
    .catch((error) => {
        console.error('Unable to create table : ', error);
    });

module.exports = {
    sequelize,
    User
};