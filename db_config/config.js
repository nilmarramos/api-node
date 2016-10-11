'use strict';

const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const urlDb = 'mongodb://localhost/cadastro';

mongoose.connect(urlDb);

mongoose.connection.on('connected', function () {
    console.log('Esta conectado com ' + urlDb);
});

mongoose.connection.on('error',function (err) {
    console.log('Erro de Conexão: ' + err);
});

require('../models/usuario');