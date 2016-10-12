'use strict';
const Usuario = require('../models/usuario');

module.exports = function(app){
    let apiController = {
        listar: function (req, res) {
           Usuario.find({},function (err, data) {
               if(err)return console.log('Erro: ', err);
               return res.json(data);
           })
        },
        consultar: function (req, res) {
            const id = req.params.id;
            Usuario.findOne({_id: id}, function (err, data) {
                if(err)return console.log('Erro: ', err);
                return res.json(data);
            })
        },
        cadastrar: function (req, res) {
            const body = req.body;
            const novoUser = new Usuario(body);
            novoUser.save(function (err, data) {
                if(err)return console.log('Erro: ', err);
                return res.json(data);
            })
        },
        alterar: function (req, res) {
            const id = req.params.id;
            const body = req.body;
            Usuario.update({_id: id},body , function (err, data) {
                if(err)return console.log('Erro: ', err);
                return res.json(data);
            })
        },
        remover: function (req, res) {
            const id = req.params.id;
            Usuario.remove({_id: id}, function (err, data) {
                if(err)return console.log('Erro: ', err);
                return res.json(data);
            })
        }
    };
    return apiController;
};