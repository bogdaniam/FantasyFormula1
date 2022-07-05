const infopiloto = require('../models/Infopiloto');
const Pilotos = require('../models/Piloto');

const pilotos = {
  
  infopiloto: async (req, res) => {//cuando se pincha en un piloto, se le pasa el id del piloto como parametro, se va a buscar en la base de datos para encontrar el id de mongo, luego se va a buscar los datos de ese piloto
    try {
      const { idpiloto } = req.body;  //el id del piloto que esta detras de cada foto
      const piloto = await Pilotos.findOne({  //se va a buscar en la tabla pilotos, el piloto en el cual hemos pinchado
        where: { id_piloto: idpiloto },
      });
      console.log(piloto.foto)
      infopiloto.findOne({ _id: (`${piloto.id_mongo}`) }).then((pilotoM) => { //el mongodb, vamos a buscar el piloto sobre cual acabamos de pinchar
        res.json(pilotoM.infopiloto);
      });
    } catch (error) {
      console.error(error);
      res.send(error);
    }
  },
  verPilotos: async (req, res) => {
    try {
      
      const piloto = await Pilotos.findAll({});
     // console.log(piloto)
      res.send(piloto);
    } catch (error) {
      console.error(error);
      res.send(error);
    }
  },

};
module.exports = pilotos;