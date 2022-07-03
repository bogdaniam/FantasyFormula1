const mongoose = require('mongoose');

const connectionString = 'mongodb://localhost:27017/FantasyFormula1';
mongoose
  .connect(connectionString)
  .then(() => {
    console.log('Conexión con MongoDB establecida');
  })
  .catch((err) => {
    console.error(err);
  });
