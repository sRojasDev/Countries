const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  return sequelize.define('country', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    id: {
      type:DataTypes.STRING,
      allowNull: false,
      primaryKey: true,
    },
    flag:{
      type:DataTypes.STRING,
      allowNull: false,
    },
    region:{
      type:DataTypes.STRING,
      allowNull: false,
    },
    capital:{
      type:DataTypes.STRING,
      allowNull: false,
    },
    subregion:{
      type:DataTypes.STRING,
      allowNull: false,
    },
    area:{
      type:DataTypes.INTEGER,
      allowNull: false,
    },
    population:{
      type:DataTypes.INTEGER,
      allowNull: false,
    },
    lat:{
      type:DataTypes.INTEGER,
      allowNull: true
    },
    long:{
      type:DataTypes.INTEGER,
      allowNull: true
    },

  },
  { 
    timestamps:false,
  });
};
