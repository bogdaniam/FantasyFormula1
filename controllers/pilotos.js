const infopiloto = require('../models/Infopiloto');
const Pilotos = require('../models/Piloto');

const pilotos = {
  //cuando se pincha en un piloto, se le pasa el id del piloto como parametro, se va a buscar en la base de datos para encontrar el id de mongo, luego se va a buscar los datos de ese piloto
  infopiloto: async (req, res) => {
    try {
      const { idpiloto } = req.body;
      const piloto = await Pilotos.findOne({
        where: { id_piloto: idpiloto },
      });
      //console.log(piloto.id_mongo)
      infopiloto.findOne({ _id: (`${piloto.id_mongo}`) }).then((pilotoM) => {
        res.json(pilotoM.infopiloto);
      });
    } catch (error) {
      console.error(error);
      res.send(error);
    }
  },

};
module.exports = pilotos;