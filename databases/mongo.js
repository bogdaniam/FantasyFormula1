const mongoose = require('mongoose');

const connectionString = 'mongodb://localhost:27017/FantasyFormula1';
mongoose
  .connect(connectionString)
  .then(() => {
    //console.log('Conexión con MongoDB establecida');
    console.log('MongoDB: Me too 🙂');
  })
  .catch((err) => {
    console.error(err);
  });
