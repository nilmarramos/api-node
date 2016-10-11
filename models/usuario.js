'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let UserSchema = new Schema({
    name: {type: String, default:''},
    cpf: { type: Number, default:''}
});
const Usuario = module.exports = mongoose.model('usuario', UserSchema);