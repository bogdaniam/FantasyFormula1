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
    //console.log('Conexión con MySQL establecida');
    console.log('MySQL: Me also 😅');
  })
  .catch((err) => {
    console.log(`MySQL: I'm dead 💀`);
    //console.log('No conectado a MySQL: ' + err);
  });
module.exports = sequelize;
