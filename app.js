'use strict';

const express = require('express');
const app = express();
const db = require('./db_config/config');
const consign = require('consign');
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended:false }));
app.use(bodyParser.json());

consign().include('controllers').then('routes').into(app);

app.listen(3000, function () {
    console.log('servidor rodando porta 3000');
});