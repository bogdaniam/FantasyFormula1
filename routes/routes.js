const express = require('express');
const bodyParser = require('body-parser');
const urlencodedParser = bodyParser.urlencoded({ extended: false });
const usuarios = require('../controllers/usuarios');
const pilotos = require('../controllers/pilotos');

const router = express.Router();

const { registro, login, verRanking} = usuarios;
const { infopiloto} = pilotos;

//router.get('/registro', registro);
router.post('/registro', urlencodedParser, registro);
router.post('/login', urlencodedParser, login);
//router.get('/verPilotos', urlencodedParser, verPilotos); //under construction
router.get('/ranking', verRanking);
router.get('/infopilotos', infopiloto);



module.exports = router;
