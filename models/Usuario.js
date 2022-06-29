const Sequelize = require('sequelize');
const sequelize = require('../databases/mysql');

const Usuario = sequelize.define('usuarios', {
  id_usuario: {
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
  email: {
    type: Sequelize.STRING,
    allowNull: false,
  }, 
  contrasena: {
    type: Sequelize.STRING,
    allowNull: false,
  }, 
  fk_ranking: {
    type: Sequelize.STRING,
    allowNull: false,
  }, 
  presupuesto: {
    type: Sequelize.STRING,
    allowNull: false,
  }, 
  rol: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});
module.exports = Usuario;
