const mongoose = require('mongoose');

const connectionString = 'mongodb://localhost:27017/FantasyFormula1';
mongoose
  .connect(connectionString)
  .then(() => {

    console.log('MongoDB: Conexion establecida');
  })
  .catch((err) => {
    console.log('MongoDB: Error en la conexion');
    console.error(err);
  });
