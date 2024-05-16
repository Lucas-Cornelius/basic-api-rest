import mongoose from "mongoose";

// Schema é um objeto de configuração que define a estrutura e as propriedades de um documento

// Modelo é um objeto que representa uma coleção na base de dados
// é uma interface para que os códigos na api interagem com o banco de dados

const livroSchema = new mongoose.Schema({
    id: { type: mongoose.Schema.Types.ObjectId },
    titulo: { type: String, required: true },
    editora: { type: String, required: true },
    preco: { type: Number },
    paginas: { type: Number },
    autor: { type: mongoose.Schema.Types.ObjectId, ref: "autores", required: true } 
}, { versionKey: false });

// params (collection, Schema)
const livro = mongoose.model("livros", livroSchema);

export default livro;