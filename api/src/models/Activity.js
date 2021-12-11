const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
    return sequelize.define('activity', {
        nombre: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        id: {
            type:DataTypes.STRING,
            allowNull: false,
            primaryKey: true,
        },
        dificultad: {
        type: DataTypes.INTEGER,
        allowNull: false,
        
        },
        temporada: {
            type: DataTypes.ENUM,
        values: [ "Verano" , "Otoño" , "Primavera" , "Invierno"],
        allowNull: false,
        
        },
        duracion: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        
    }, { 
        timestamps:false,
    });
};