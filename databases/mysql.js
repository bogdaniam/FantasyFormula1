const mysql = require('mysql');

const { Sequelize } = require('sequelize');
const sequelize = new Sequelize('formulaFantasy', 'root', 'root', {
  host: 'localhost',
  dialect: 'mysql',
  port: 3306,
  define: {
    timestamps: false
},
logging: false
});
sequelize
  .authenticate()
  .then(() => {

    console.log('MySQL: Conexion establecida');
  })
  .catch((err) => {
    console.log(`MySQL: Error en la conexion`);
    
  });
module.exports = sequelize;
