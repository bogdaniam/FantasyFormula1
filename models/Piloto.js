const Sequelize = require('sequelize');
const sequelize = require('../databases/mysql');

const Piloto = sequelize.define('pilotos', {
    id_piloto: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  nombre: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  apellido: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  precio: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  id_mongo: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  foto: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  numero: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});
module.exports = Piloto;
