
const Usuario = require('../models/Usuario');
const Ranking = require('../models/Ranking');
const { encrypt, compare } = require('../helpers/handleBcrypt');




const usuarios = {
  /*registro: (req, res) => {
    try {
      res.render('../views/pages/registro');
    } catch (error) {
      console.error(error);
      res.status(500);
      res.render('../views/pages/404');
    }
  },*/
  registro: async (req, res) => {

    try {

      const {
        nombre,
        apellido,
        email,
        contrasena,
      } = req.body;
      const passwordHash = await encrypt(contrasena);

      const usuarioComprobacion = await Usuario.findOne({
        where: { email: email },
      });

      if (!usuarioComprobacion) {

        if (
          nombre.match(/^[a-z ,.'-]+$/i) &&
          apellido.match(/^[a-z ,.'-]+$/i) &&
          email.match(
            /^[a-zA-Z0-9_\-\.~]{2,}@[a-zA-Z0-9_\-\.~]{2,}\.[a-zA-Z]{2,4}$/)
        ) {
          const ranking = await Ranking.create({
            puntos: 0,
          });

          const usuario = await Usuario.create({
            nombre: nombre,
            apellido: apellido,
            email: email,
            contrasena: passwordHash,
            fk_ranking: ranking.toJSON().id_ranking,
            presupuesto: 20000000,
            rol: "user",
          });
          res.send("Registro con exito");
        } else {

          res.send("Datos invalidos");
        }

      } else {
        res.send("El usuario existe");
      }
    } catch (error) {
      console.error(error);
      res.send("Error");
    }
  },


  login: async (req, res) => {
    try {
      
      const usuarioLogin = req.body.respuesta.usuarioLogin
      const passwordLogin = req.body.respuesta.passwordLogin

      //const { usuarioLogin, passwordLogin } = req.body;
      const usuario = await Usuario.findOne({
        where: { email: usuarioLogin },
        
      });
      //console.log(usuarioLogin)
      //console.log(passwordLogin)
      if (!usuario) {
      
        res.send("El usuario no existe");
      }
      const checkPassword = await compare(passwordLogin, usuario.contrasena);

      if (checkPassword) {
        
        //res.send(`Bienvenido ${usuario.nombre}. Login ok`);
        res.json({
          message: `Bienvenido ${usuario.nombre}. Login ok`,
        });

      } else {
        res.send("Contraseña erronea");
      }
    } catch (error) {
        console.error(error);
        res.send(error);
    }
  },

  verRanking: async (req, res) => {
    try {

 
      const objPuntos = await Ranking.findAll({order: [['puntos', 'desc']]});
      let ranking ={};
      let usuarios = {};

      for (let i = 0; i < objPuntos.length; i++){
        usuarios[i] = await Usuario.findOne({
          where: { fk_ranking: objPuntos[i].id_ranking },
        });
        ranking[`${usuarios[i].dataValues.nombre}`] = `${objPuntos[i].puntos}`
      }

      res.send(ranking);

    } catch (error) {
      console.error(error);
      res.send(error);
    }
  },

  


};
module.exports = usuarios;
