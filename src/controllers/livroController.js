import livro from "../models/Livro.js";
import { autor } from "../models/Autor.js";

class LivroController {
    
    static async listarLivros (req,res) {
        try {
            const listaLivros = await livro.find({}).populate("autor").exec();
            res.status(200).json(listaLivros);
        } catch (erro) {
            res.status(500).json({ message: `${erro.message} - falha na requisição` });
        };
    };

    static async listarLivrosPorEditora (req,res) {
        const editora = req.query.editora;
        try {
            const livrosPorEditora = await livro.find({ editora: editora }).populate("autor").exec;
            res.status(200).json(livrosPorEditora);
        } catch (erro) {
            res.status(500).json({ message: `${erro.message} - falha na busca` });
        };
    };

    static async listarLivroPorId (req,res) {
        try {
            const id = req.params.id;
            const livroEncontrado = await livro.findById(id).populate("autor").exec();
            res.status(200).json(livroEncontrado);
        } catch (erro) {
            res.status(500).json({ message: `${erro.message} - falha na requisição do livro` });
        };
    };

    static async cadastrarLivro (req,res) {
        try {
            const novoLivro = await livro.create(req.body);
            res.status(201).json({ message: "Criado com sucesso", livro: novoLivro });
        } catch (erro) {
            res.status(500).json({ message: `${erro.message} - Falha ao cadastrar livro` });
        };
    };

    static async atualizarLivro (req,res) {
        try {
            const id = req.params.id;
            await livro.findByIdAndUpdate(id, req.body);
            res.status(200).json({ message: "livro atualizado" });
        } catch (erro) {
            res.status(500).json({ message: `${erro.message} - falha na atualização do livro` });
        };
    };

    static async excluirLivro (req,res) {
        try {
            const id = req.params.id;
            await livro.findByIdAndDelete(id);
            res.status(200).json({ message: "livro excluído com sucesso" });
        } catch (erro) {
            res.status(500).json({ message: `${erro.message} - falha na exclusão do livro` });
        };
    };

};

export default LivroController;