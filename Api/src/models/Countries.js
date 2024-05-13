const {DataTypes, Sequelize} = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
    //defino modelo
    sequelize.define('countries',{
        id:{
            type: DataTypes.UUID,
            dafaultValue: DataTypes.UUIDV4,
            allowNull: false,
            primaryKey: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        image: {
            type: DataTypes.STRING
        },
        population:{
            type: DataTypes.INTEGER
        },
        capital: {
            type: DataTypes.STRING
        },
        subregion:{
            type: DataTypes.STRING
        },
        toplevel:{
            type: DataTypes.STRING
        },
        currencies:{
            type: DataTypes.STRING
        },
        lenguages:{
            type: DataTypes.STRING
        }
    });
};