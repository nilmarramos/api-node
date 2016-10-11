'use strict';

module.exports = function(app){
    let apiController = app.controllers.api;

    app.get('/api', apiController.index);
    app.post('/api', apiController.create);
};