const mongoose = require("mongoose");

const cursosSchema = new mongoose.Schema ({
    id: { type: Number,},
    nomeDolivro: {type: String,},
    editora: { type: String},
    lancamento: { type: Number},
    autor: { type: String},
    genero: [{ type: String }], // quando o objeto recebe um array com parâmetro
    topFive: { type: Boolean},
}, {
    versionKey: false
});

const livros = mongoose.model ('livros', cursosSchema)

module.exports = livros;