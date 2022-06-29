const express = require('express');
const bodyParser = require('body-parser');
const urlencodedParser = bodyParser.urlencoded({ extended: false });
const usuarios = require('../controllers/usuarios');

const router = express.Router();

const { registro} = usuarios;


//router.get('/registro', registro);
router.post('/registro', urlencodedParser, registro);



module.exports = router;
