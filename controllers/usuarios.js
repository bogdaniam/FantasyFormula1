
const Usuario = require('../models/Usuario');
const Ranking = require('../models/Ranking');
const { encrypt, compare } = require('../helpers/handleBcrypt');




const usuarios = {
  
  registro: async (req, res) => {
      console.log("backend")
    try {
      const nombre = req.body.respuesta.name
      const apellido = req.body.respuesta.lastname
      const email = req.body.respuesta.email
      const contrasena = req.body.respuesta.password


      // const {
      //   nombre,
      //   apellido,
      //   email,
      //   contrasena,
      // } = req.body;
      const passwordHash = await encrypt(contrasena);

      const usuarioComprobacion = await Usuario.findOne({
        where: { email: email },
      });
      console.log(passwordHash)
      console.log(usuarioComprobacion)
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
            rol: 0,
          });
          res.json({
            message: "Registro con exito",
          });
          //res.send("Registro con exito");
        } else {
          res.json({
            message: "Datos invalidos",
          });
          //res.send("Datos invalidos");
        }

      } else {
        res.json({
          message: "El usuario existe",
        });
        //res.send("El usuario existe");
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
      
        //res.send("El usuario no existe");
        res.json({
          message: "El usuario no existe",
        });
      }
      const checkPassword = await compare(passwordLogin, usuario.contrasena);

      if (checkPassword) {
        
        //res.send(`Bienvenido ${usuario.nombre}. Login ok`);
        
        res.json({
          message: true,
          id: usuario.id_usuario, 
          rol: usuario.rol,
          //nombre: usuario.nombre,
          //apellido: usuario.apellido,
          //rol: usuario.rol  
      })

        //console.log(usuario)
        // res.json({
        //   message: `Bienvenido ${usuario.nombre}. Login ok`,
        // });

      } else {
        //res.send("Contraseña erronea");
        res.json({
          message: `Contraseña erronea`,
        });
      }
    } catch (error) {
        console.error(error);
        res.send(error);
    }
  },

  verRanking: async (req, res) => {
    try {

 
      const objPuntos = await Ranking.findAll({order: [['puntos', 'desc']]});
      let ranking =[];
      let usuarios = {};

      for (let i = 0; i < objPuntos.length; i++){
        usuarios[i] = await Usuario.findOne({
          where: { fk_ranking: objPuntos[i].id_ranking },
        });

        let data = {
          name: usuarios[i].dataValues.nombre,
          points: objPuntos[i].puntos
        }
        ranking.push(data)




        //ranking[`${usuarios[i].dataValues.nombre}`] = `${objPuntos[i].puntos}`
        //ranking[i] = (`${usuarios[i].dataValues.nombre}`, `${objPuntos[i].puntos}`);

      }
      
      // for (let i = 0; i < objPuntos.length; i++){
      //   usuarios[i] = await Usuario.findOne({
      //     where: { fk_ranking: objPuntos[i].id_ranking },
      //   });
      //   //ranking`${usuarios[i].dataValues.nombre}` = `${objPuntos[i].puntos}`
      //   ranking[i][0] = `${usuarios[i].dataValues.nombre}`;
      //   ranking[i][1] = `${objPuntos[i].puntos}`;
      // }



      //for (let key in ranking) {

    
        //console.log(key)
       
        //console.log(ranking[`${key}`])

        

    //}
      //console.log(Object.keys(ranking).length)




      res.send(ranking);

    } catch (error) {
      console.error(error);
      res.send(error);
    }
  },

  perfil: async (req, res) => {
    try {

      let fkuserid = req.body.respuesta.logId;
      const usuario = await Usuario.findOne({
        where: { id_usuario: fkuserid },
      });
      console.log(usuario)
    res.json({
      nombre: usuario.nombre,
      apellido: usuario.apellido,
      email: usuario.email
    })

    } catch (error) {
      console.error(error);
      res.send(error);
    }
  },

cambiarNombre: async (req, res) => {
    try {

      let fkuserid = req.body.respuesta.logId;

       const cambioNombre = await Usuario.update({ nombre: req.body.respuesta.nombre }, {
        where: { id_usuario: fkuserid },
      });
      const usuario = await Usuario.findOne({
        where: { id_usuario: fkuserid },
      });

      //console.log(usuario)
    res.json({
      nombre: usuario.nombre,
      apellido: usuario.apellido,
      email: usuario.email
    })

    } catch (error) {
      console.error(error);
      res.send(error);
    }
  },


  cambiarApellido: async (req, res) => {
    try {

      let fkuserid = req.body.respuesta.logId;

       const cambioApellido = await Usuario.update({ apellido: req.body.respuesta.apellido }, {
        where: { id_usuario: fkuserid },
      });
      const usuario = await Usuario.findOne({
        where: { id_usuario: fkuserid },
      });

      //console.log(usuario)
    res.json({
      nombre: usuario.nombre,
      apellido: usuario.apellido,
      email: usuario.email
    })

    } catch (error) {
      console.error(error);
      res.send(error);
    }
  },


  cambiarContrasena: async (req, res) => {
    try {

      let fkuserid = req.body.respuesta.logId;
      const passwordHash = await encrypt(req.body.respuesta.contrasena);
      const cambioApellido = await Usuario.update({ contrasena: passwordHash }, {
        where: { id_usuario: fkuserid },
      });
      const usuario = await Usuario.findOne({
        where: { id_usuario: fkuserid },
      });

      //console.log(usuario)
    res.json({
      nombre: usuario.nombre,
      apellido: usuario.apellido,
      email: usuario.email
    })

    } catch (error) {
      console.error(error);
      res.send(error);
    }
  },

  cambiarEmail: async (req, res) => {
    try {

      let fkuserid = req.body.respuesta.logId;
      
      const cambioEmail = await Usuario.update({ email: req.body.respuesta.email }, {
        where: { id_usuario: fkuserid },
      });
      const usuario = await Usuario.findOne({
        where: { id_usuario: fkuserid },
      });

      //console.log(usuario)
    res.json({
      nombre: usuario.nombre,
      apellido: usuario.apellido,
      email: usuario.email
    })

    } catch (error) {
      console.error(error);
      res.send(error);
    }
  },

  administrarUsuarios: async (req, res) => {
    try {

      
      
      
      const usuarios = await Usuario.findAll({
        where: { rol: false },
      });
   

      //console.log(usuario)
    res.json({usuarios
      
    })

    } catch (error) {
      console.error(error);
      res.send(error);
    }
  },
  

  deleteUser: async (req, res) => {
    try {

      
     const usuario = req.body.respuesta.id

     const usuariofk = await Usuario.findOne({
      where: { id_usuario: usuario},
    });
      const usuarios = await Usuario.destroy({
        where: { id_usuario: usuario},
      });

      const ranking = await Ranking.destroy({
        where: { id_ranking: usuariofk.fk_ranking},
      });
      


    const usuariosN = await Usuario.findAll({
      where: { rol: false },
    });
 

    //console.log(usuario)
  res.json({usuariosN
    
  })

    } catch (error) {
      console.error(error);
      res.send(error);
    }
  },


};
module.exports = usuarios;
