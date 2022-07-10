const express = require('express');
const bodyParser = require('body-parser');
const urlencodedParser = bodyParser.urlencoded({ extended: false });
const usuarios = require('../controllers/usuarios');
const pilotos = require('../controllers/pilotos');

const router = express.Router();

const { registro, login, verRanking} = usuarios;
const { infopiloto, verPilotos, comprar, vender, activar, desactivar} = pilotos;

//router.get('/registro', registro);
router.post('/registro', urlencodedParser, registro);
router.post('/login', urlencodedParser, login);
//router.get('/verPilotos', urlencodedParser, verPilotos); 
router.post('/verPilotos', urlencodedParser, verPilotos); 
router.get('/ranKing', verRanking);
router.post('/infopilotos', infopiloto);
router.post('/comprar', comprar);
router.post('/vender', vender);
router.post('/activar', activar);
router.post('/desactivar', desactivar);


module.exports = router;
