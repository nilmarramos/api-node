'use strict';

var users = [
    { id: 1, username: 'Manuel', email: 'manuel@examplo.com' },
    { id: 2, username: 'Maria', email: 'maria@examplo.com' }
];

module.exports = function (app) {
    let homeController = {
        index: function (req, res) {
            res.send(users)
        },
        contact: function (req, res) {
            res.send('<h2>Contato</h2>')
        }
    };
    return homeController;
};