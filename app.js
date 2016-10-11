const express = require('express');
const app = express();
const consign = require('consign');

consign.include('controllers').then('routes').into(app);

app.get('/', function (req,res) {
    res.send('Nilmar')
});

app.listen(3000, function () {
    console.log('servidor rodando porta 3000');
});