const Sequelize = require('sequelize');
const sequelize = require('../databases/mysql');

const Resultado = sequelize.define('resultados', {
    id_resultado: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  fecha: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  fk_piloto: {
    type: Sequelize.STRING,
    allowNull: false,
  }, 
  fk_puntuacion: {
    type: Sequelize.STRING,
    allowNull: false,
  }, 
  
});
module.exports = Resultado;
