const livros = require('../model/livros.json');
const fs = require("fs");

const postLivros = (req,res) => {
    console.log(req.body);
    const {id, nomeDoLivro, editora, lancamento, autor, genero} = req.body;
    livros.push({id, nomeDoLivro, editora, lancamento, autor, genero});

    fs.writeFile("./src/model/livros.json" , JSON.stringify(livros), 'utf8', function(err) {
        if (err) {
        return res.status(424).send({ message:err });
    }
        console.log("Arquivo atualizado com sucesso");
    });

    res.status(201).send(livros)

};

const deleteLivro = (req, res) => {
const id = req.params.id;
try {
const livroFiltrado = livros.find((livro) => livro.id == id);
const index = livros.indexOf(livroFiltrado);
livros.splice(index,1);
//if (res.satus == 424) {
    //return res.status(424).send({ messagem:'registro não encontrado'})
//}

fs.writeFile("./src/model/livros.json" , JSON.stringify(livros), 'utf8', function(err) {
    if (err) {
        return res.status(424).send({message:err});
};
console.log("Livro deletado com Sucesso");

});

res.status(200).send(livros)
} catch(err) {
    console.log(err) // visualizar o erro no console
    return res.status(424). send({ message: 'erro ao deletar o registro de tarefa' }) // mensagem de retorno
    }

};

const getLivrosByGenero = (req,res) => {
    const genero = req.params.genero
    const livroFiltradoGenero = livros.filter((livro) => livro.genero == genero)
    res.status(200).send(livroFiltradoGenero)
}

const getAllNomeLivro = (req, res) => {
    const nomeLivro = livros.map((livro) => livro.nomeDoLivro)
    res.status(200).send(nomeLivro)
}

const putLivro = (req, res) => {
    //pega o id do livro que foi passado por query param
const id = req.params.id
   //Filtra o Array de objetos para encontrar o objeto requerido
const livroASerModificado = livros.find((livro)=> livro.id ==id)
console.log (livroASerModificado)

  //Pega o corpo da requisição com as alterações
const livroAtualizado = req.body
console.log(livroAtualizado)

  //index
const index = livros.indexOf(livroASerModificado)
console.log(index)

  //Buscando no array o endereço, excluindo o registro antigo e substituindo pelo novo
livros.splice(index,1,livroAtualizado)
console.log(livros)
res.status(200).send(livros)
}

const patchLivro = (req, res) => {

}

module.exports = {
    postLivros,
    deleteLivro,
    getLivrosByGenero,
    getAllNomeLivro,
    putLivro,
    patchLivro

};