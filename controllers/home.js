'use strict';

module.exports = function (app) {
    let homeController = {
        index: function (req, res) {
            res.send()
        },
        contact: function (req, res) {
            res.send('<h2>Contato</h2>')
        }
    };
    return homeController;
};