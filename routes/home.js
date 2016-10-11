'use strict';

module.exports = function (app) {
    let homeController = app.controllers.home;

    app.get('/', homeController.index);
    app.get('/contato', homeController.contact);
};