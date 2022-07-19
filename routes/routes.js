const express = require('express');
const bodyParser = require('body-parser');
const urlencodedParser = bodyParser.urlencoded({ extended: false });
const usuarios = require('../controllers/usuarios');
const pilotos = require('../controllers/pilotos');
const passRecovery = require('../controllers/passRecovery');
const middleware = require('../middleware/middleware');

const router = express.Router();

const { registro, login, verRanking, perfil, cambiarNombre, cambiarApellido, cambiarContrasena, cambiarEmail, administrarUsuarios, deleteUser} = usuarios;
const { infopiloto, verPilotos, comprar, vender, activar, desactivar, actualizar} = pilotos;
const { confirmedUser, confirmUserGet, checkUserPost} = passRecovery;



//router.get('/registro', registro);
router.post('/registro', urlencodedParser, registro);
router.post('/login', urlencodedParser, login);
//router.get('/verPilotos', urlencodedParser, verPilotos); 
router.post('/verPilotos', middleware.middleware, verPilotos); 
router.get('/ranKing', verRanking);
router.post('/infopilotos', infopiloto);
router.post('/comprar', comprar);
router.post('/vender', vender);
router.post('/activar', activar);
router.post('/desactivar', desactivar);
router.post('/perfil', middleware.middleware, perfil);
router.post('/cambiarNombre', cambiarNombre);
router.post('/cambiarApellido', cambiarApellido);
router.post('/cambiarContrasena', cambiarContrasena);
router.post('/cambiarEmail', cambiarEmail);
router.get('/administrarUsuarios', administrarUsuarios);
router.post('/deleteUser', deleteUser);
router.post('/actualizar', actualizar);
router.post('/pwrecover', confirmedUser);
router.get('/pwrecoverReset/:email/:token', confirmUserGet);
router.post('/pwrecoverReset/:email/:token', checkUserPost);


module.exports = router;
