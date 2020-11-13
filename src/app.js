const express = require("express")
const mongoose = require("mongoose");

const app = express()

mongoose.connect("mongodb+srv://nadyLuna:<password>@cluster0.thgjc.mongodb.net/livros?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true
});
//conexão com o mongo
let db = mongoose.connection;

// Captura de erro ou sucesso na conexão
db.on("error", console.log.bind(console, "connection error:"))
db.once("open", function () {
    console.log("conexão feita com sucesso.")
})

//rotas
const livros = require("./routes/livroRouter")

//configurar body 
app.use(express.json());


app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*")
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
    )
    next()
})

app.use("/livros", livros)

module.exports = app