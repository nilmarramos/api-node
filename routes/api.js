'use strict';

module.exports = function(app){
    let apiController = app.controllers.api;

    app.get('/api', apiController.listar);
    app.get('/api/:id', apiController.consultar);
    app.post('/api', apiController.cadastrar);
    app.put('/api/:id', apiController.alterar);
    app.delete('/api/:id', apiController.remover);
};