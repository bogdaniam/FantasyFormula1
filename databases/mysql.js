const mysql = require('mysql');

const { Sequelize } = require('sequelize');
const sequelize = new Sequelize('formulaFantasy', 'root', 'root', {
  host: 'localhost',
  dialect: 'mysql',
  port: 3306,
  define: {
    timestamps: false
}
});
sequelize
  .authenticate()
  .then(() => {
    console.log('Conexión con MySQL establecida');
  })
  .catch((err) => {
    console.log('No conectado a MySQL: ' + err);
  });
module.exports = sequelize;
