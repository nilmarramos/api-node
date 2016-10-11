'use strict';
const Usuario = require('../models/usuario');

module.exports = function(app){
    let apiController = {
        index: function (req, res) {
           Usuario.find({},function (err, data) {
               if(err)return console.log('Erro: ', err);
               return res.json(data);
           })
        },
        create: function (req, res) {
            const body = req.body;
            const novoUser = new Usuario(body);
            novoUser.save(function (err, data) {
                if(err)return console.log('Erro: ', err);
                return res.json(data);
            })
        }
    };
    return apiController;
};