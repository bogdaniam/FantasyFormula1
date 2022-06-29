const Sequelize = require('sequelize');
const sequelize = require('../databases/mysql');

const Ranking = sequelize.define('rankings', {
    id_ranking: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  puntos: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  
});
module.exports = Ranking;

