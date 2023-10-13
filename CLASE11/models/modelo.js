const { Sequelize, DataTypes } = require('sequelize');
const sequelize=require('../db/database')

const User = sequelize.define('User', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull:false,
        primaryKey: true
    },
    nombre: {
        type: DataTypes.STRING,
        allowNull: false
    },
    apellido: {
        type: DataTypes.STRING,
        allowNull: false
    },
    imageUrl:{
        type: DataTypes.STRING,
        allowNull:null
    }
}, {
});

module.exports=User