import livro from "../models/Livro.js";

class LivroController {
    
    static async listarLivros (req,res) {
        try {
            const livrosResultado = await livro.find({}).populate("autor").exec();
            res.status(200).json(livrosResultado);
        } catch (erro) {
            res.status(500).json({ message: `${erro.message} - Erro interno no servidor` });
        };
    };

    static async listarLivrosPorEditora (req,res) {
        const editora = req.query.editora;
        try {
            const livrosResultado = await livro.find({ editora: editora }).populate("autor").exec;
            res.status(200).json(livrosResultado);
        } catch (erro) {
            res.status(500).json({ message: `${erro.message} - Erro interno no servidor` });
        };
    };

    static async listarLivroPorId (req,res) {
        try {
            const id = req.params.id;
            const livrosResultado = await livro.findById(id).populate("autor").exec();
            res.status(200).json(livrosResultado);
        } catch (erro) {
            res.status(500).json({ message: `${erro.message} - Falha na requisição do livro` });
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
            res.status(200).json({ message: "Livro atualizado" });
        } catch (erro) {
            res.status(500).json({ message: `${erro.message} - Falha na atualização do livro` });
        };
    };

    static async excluirLivro (req,res) {
        try {
            const id = req.params.id;
            await livro.findByIdAndDelete(id);
            res.status(200).json({ message: "Livro excluído com sucesso" });
        } catch (erro) {
            res.status(500).json({ message: `${erro.message} - Falha na exclusão do livro` });
        };
    };

};

export default LivroController;