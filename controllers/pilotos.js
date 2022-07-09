const infopiloto = require('../models/Infopiloto');
const Pilotos = require('../models/Piloto');
const UsuariosPilotos = require('../models/UsuariosPilotos');
const Usuario = require('../models/Usuario');

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

      let fkuserid = req.body.respuesta.logId;
      const usuario = await Usuario.findOne({
        where: { id_usuario: fkuserid },
      });
      console.log(usuario.presupuesto)
      //const usuarioPiloto = await UsuariosPilotos.findAll({ where: { fk_usuario: fkuserid }});
      //const pilotos = await Pilotos.findAll({ where: { id_piloto: usuarioPiloto.fk_piloto }});
      //console.log(usuarioPiloto)
      //const piloto = await Pilotos.findAll({});

      //se busca todos los pilotos que tiene el usuario logeado activados
      const usuarioPilotoA = await UsuariosPilotos.findAll({ where: { fk_usuario: fkuserid, estado: true } });
      //se busca todos los pilotos que tiene el usuario logeado desactivados
      const usuarioPilotoR = await UsuariosPilotos.findAll({ where: { fk_usuario: fkuserid, estado: false } });
      
      let pilotosActivos = [];
      let pilotosReservas = [];
      let pilotosRestantesMenos = [];
      let pilotosRestantesMayor = [];
      let pilotosTodos = [];
      let arrayPilotos = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
      //let pilotosComprados = []; pendiente de eliminar
      let piloto = {};
      for (let i = 0; i < usuarioPilotoA.length; i++) {
        piloto[i] = await Pilotos.findAll({ where: { id_piloto: usuarioPilotoA[i].fk_piloto } });
        //console.log(piloto[i])
        //console.log(usuarioPiloto)
        let data = {
          nombre: piloto[i][0].nombre,
          apellido: piloto[i][0].apellido,
          foto: piloto[i][0].foto,
          id_piloto: piloto[i][0].id_piloto,
          precio: piloto[i][0].precio,
          userid: fkuserid
        }

        //para eliminar los pilotos activados que tiene el usuario, de todos los pilotos (se utilizar para pintar los pilotos que no tiene)
        const index = arrayPilotos.indexOf(piloto[i][0].id_piloto);
        if (index > -1) { arrayPilotos.splice(index, 1); }
        pilotosActivos.push(data)
      }
      pilotosTodos.push(pilotosActivos)

      let pilotoActivar;
      if (pilotosActivos.length < 2) {
        pilotoActivar = true
      } else {
        pilotoActivar = false
      }

      for (let i = 0; i < usuarioPilotoR.length; i++) {
        piloto[i] = await Pilotos.findAll({ where: { id_piloto: usuarioPilotoR[i].fk_piloto } });
        //console.log(piloto[i])
        //console.log(usuarioPiloto)
        let data1 = {
          nombre: piloto[i][0].nombre,
          apellido: piloto[i][0].apellido,
          foto: piloto[i][0].foto,
          id_piloto: piloto[i][0].id_piloto,
          precio: piloto[i][0].precio,
          userid: fkuserid
        }

        //para eliminar los pilotos desactivados que tiene el usuario, de todos los pilotos (se utilizar para pintar los pilotos que no tiene)
        const index = arrayPilotos.indexOf(piloto[i][0].id_piloto);
        if (index > -1) { arrayPilotos.splice(index, 1); }
        pilotosReservas.push(data1)
      }
      pilotosTodos.push(pilotosReservas)



      //para buscar los pilotos que no tiene el usuario
      for (let i = 0; i < arrayPilotos.length; i++) {
        piloto[i] = await Pilotos.findAll({ where: { id_piloto: arrayPilotos[i] } });
        //console.log(piloto[i][0].precio)
        //console.log(usuarioPiloto)
        if (piloto[i][0].precio <= usuario.presupuesto){

        let data2 = {
          nombre: piloto[i][0].nombre,
          apellido: piloto[i][0].apellido,
          foto: piloto[i][0].foto,
          id_piloto: piloto[i][0].id_piloto,
          precio: piloto[i][0].precio,
          userid: fkuserid
        }


        pilotosRestantesMenos.push(data2)
        //pilotosComprados.push(piloto[i][0].id_piloto)
      } else {
        let data4 = {
          nombre: piloto[i][0].nombre,
          apellido: piloto[i][0].apellido,
          foto: piloto[i][0].foto,
          id_piloto: piloto[i][0].id_piloto,
          precio: piloto[i][0].precio,
          userid: fkuserid
        }
        pilotosRestantesMayor.push(data4)

      }
      }

      pilotosTodos.push(pilotosRestantesMenos)
      pilotosTodos.push(pilotosRestantesMayor)
      console.log(pilotosTodos)


      
      //para dar o quitar premiso al usuario a la hora de comprar pilotos...maximo 5 pilotos
      let pilotosRestantes = pilotosRestantesMenos.length + pilotosRestantesMayor.length
      let data3 = {}
      if (pilotosRestantes > 15) {
        res.json(
          {
            mensaje: true,
            mensaje2: pilotoActivar,
            pilotosTodos,
            presupuesto: usuario.presupuesto

          }
        )

      } else {
        res.json(
          {
            mensaje: false,
            mensaje2: pilotoActivar,
            pilotosTodos,
            presupuesto: usuario.presupuesto
          }
        )
      }
      pilotosTodos.push(data3)
      //console.log(pilotosTodos[3])
      //console.log(pilotosTodos)
      //console.log(piloto[0][0])
      // res.json(
      //   {mensaje: true,
      //     pilotosTodos
      //   }
      // )
      //res.json(pilotosTodos);



      //ver todos los pilotos
      //  const piloto = await Pilotos.findAll({});
      //  console.log(piloto)
      //res.send(pilotosFoto);
    } catch (error) {
      console.error(error);
      res.send(error);
    }
  },

  comprar: async (req, res) => {
    try {
      const { user, id } = req.body.respuesta;

      let totalPilotosUsuarios = await UsuariosPilotos.findAll({ where: { fk_usuario: user } });
      let pilotosActivos = await UsuariosPilotos.findAll({ where: { fk_usuario: user, estado: true } });
      //console.log(pilotosUsuarios)

      if (totalPilotosUsuarios.length < 5) {
        const usuarioActual = await Usuario.findOne({
          where: { id_usuario: user },
        });
        const piloto = await Pilotos.findOne({
          where: { id_piloto: id },
        });
        //console.log(usuario.presupuesto)
        //console.log(piloto.precio)
        const nuevoPresupuesto1 = usuarioActual.presupuesto - piloto.precio;
        //console.log(nuevoPresupuesto1)
  
  
        const nuevoPresupuesto = await Usuario.update({presupuesto: nuevoPresupuesto1},{
          where: { id_usuario: user },
        });
        const usuario = await UsuariosPilotos.create({
          fk_usuario: user,
          fk_piloto: id,
          estado: false,
        });

        //console.log(totalPilotosUsuarios.length);
        //console.log(pilotosActivos.length);

        res.json({
          message: true

        })
      }
    } catch (error) {
      console.error(error);
      res.send(error);
    }
  },


  vender: async (req, res) => {
    try {
      const { user, id } = req.body.respuesta;

      const pilotoBorrado = await UsuariosPilotos.destroy({
        where: { fk_usuario: user, fk_piloto: id },
      });
      const usuario = await Usuario.findOne({
        where: { id_usuario: user },
      });
      const piloto = await Pilotos.findOne({
        where: { id_piloto: id },
      });
      //console.log(usuario.presupuesto)
      //console.log(piloto.precio)
      const nuevoPresupuesto1 = usuario.presupuesto + piloto.precio;
      //console.log(nuevoPresupuesto1)


      const nuevoPresupuesto = await Usuario.update({presupuesto: nuevoPresupuesto1},{
        where: { id_usuario: user },
      });
      




      //console.log(usuario);
      res.json({
        message: true

      })
    } catch (error) {
      console.error(error);
      res.send(error);
    }
  },


  activar: async (req, res) => {
    try {
      const { user, id } = req.body.respuesta;

      const activarEstado = await UsuariosPilotos.update({
        estado: true,
      }, {
        where: { fk_usuario: user, fk_piloto: id },
      });



      //console.log(usuario);
      res.json({
        message: true

      })
    } catch (error) {
      console.error(error);
      res.send(error);
    }
  },

  desactivar: async (req, res) => {
    try {
      const { user, id } = req.body.respuesta;

      const desactivarEstado = await UsuariosPilotos.update({
        estado: false,
      }, {
        where: { fk_usuario: user, fk_piloto: id },
      });


      //console.log(usuario);
      res.json({
        message: true

      })
    } catch (error) {
      console.error(error);
      res.send(error);
    }
  },



};
module.exports = pilotos;