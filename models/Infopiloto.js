const mongoose = require('mongoose');
const { Schema, model } = mongoose;
// El esquema
const infopilotoSchema = new Schema({
  nombre: String,
  apellidos: String,
  fechanacimiento: String,
  lugarnacimiento: String,
  equipoactual: String,
  infopiloto: String,
});

const infopiloto = model('infopiloto', infopilotoSchema);

module.exports = infopiloto;