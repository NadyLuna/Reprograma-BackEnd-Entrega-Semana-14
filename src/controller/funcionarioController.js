const funcionarios = require('../model/funcionarios.json');
const fs = require("fs");

const postFuncionarios = (req,res) => {
    console.log(req.body);
    const {nome,} = req.body;
    funcionarios.push({});

    fs.writeFile("./src/model/funcionarios.json" , JSON.stringify(funcionarios), 'utf8', function(err) {
        if (err) {
        return res.status(424).send({ message:err });
    }
        console.log("Arquivo atualizado com sucesso");
    });

    res.status(201).send(funcionarios)

};

const getAllFuncionarios = (req, res) => {
    console.log(req.url);
    res.send(funcionarios);
}

module.exports = {
    postFuncionarios,
    getAllFuncionarios
}