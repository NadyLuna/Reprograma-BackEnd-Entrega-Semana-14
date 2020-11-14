const { QueryCursor } = require("mongoose");
const livros = require("../model/livros.js");

const getAll = (req, res) => {
    livros.find((err, livros) => {
        if (err) {
            res.status(500).send({message: err.message});
        } else {
            res.status(200).send(livros);
        }
    })
}

const getById = (req, res) => {
    const id = req.params.id;
    livros.find({ id }, (err, livros) => {
        if (err) {
            res.status(424).send({ message: err.message});
        } else if (curso.length > 0) {
            res.status(200).send(livros);
        } else {
            res.status(404).send({ message: "livro não encontrado.",
            });
        };
    });
};

const topFive = (req, res) => {
    livros.find({ topFive: true },((err, livros) => {
            if (err) {
                res.status(500).send({message: err.message});
            } else{
                res.status(200).send(livros);
                }     
        })  
    );
};

    


const postLivros = (req, res) => {
    livros.countDocuments((err, count) => {
        if (err) {
            res.status(424).send({ message: err.message,});
        } else{
            let livro = new livros(req.body);
            livro.id = count + 1;
            livro.save ((err) => {
                if (err) {
                    res.status(424).send({ message: err.message,});
                } else {
                    res.status(200).send({
                            status: true,
                            menssagem: "Livro incluído com sucesso!",
                        });
                    };
                });
            };
        });
};


const deleteLivro = (req, res) => {
        const id = req.params.id;
        livros.find({id}, (err, livro) => {
            if (livro.length > 0) {
                livros.deleteOne({id}, (err) => {err?
                        res.status(424).send({message: err.message}) :
                        res.status(200).send({status: true, mensagem: "livro excluído com sucesso", });
                });
            } else {
                res.status(404).send("livro não encontrado");
            }
        });
};


const putLivro = (req, res) => {
        const id = req.params.id;
        livros.updateMany({ id }, {$set: req.body}, {upsert: true}, function ( err) {
            if (err) {
                res.status(500).send({message: err.message});
            } else {
                res.status(200).send({message: "livro atualizado com sucesso"});
            }
        });
};
    console.log(req.url);
    livros.find(function (err, livros) {
        if (err)
            res.status(500).send({message: err.message,});

        res.status(200).send(livros);
});



module.exports = {
    getAll,
    topFive,
    getById,    
    postLivros,
    deleteLivro,
    putLivro
};