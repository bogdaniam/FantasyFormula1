const Sequelize = require('sequelize');
const sequelize = require('../databases/mysql');

const UsuariosPilotos = sequelize.define('usuario_piloto', {
    id_usuario_piloto: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  fk_usuario: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  fk_piloto: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  estado: {
    type: Sequelize.BOOLEAN,
    allowNull: false,
  },
  
});
module.exports = UsuariosPilotos;