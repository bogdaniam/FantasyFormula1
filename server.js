const path = require('path');
const express = require('express');
const cors = require('cors');
const http = require('http');

const app = express();
app.use(express.json());
app.use(cors());

app.use(require('./routes/routes'));
require('./databases/mongo');
require('./databases/mysql');

const port = 5000;
//app.listen(port, () => console.log(`Servidor escuchando por el puerto ${port}!`));

app.listen(port, () => console.log(`Express: I'm up and running 😁`));
