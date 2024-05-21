import livro from "../models/Livro.js";

class LivroController {
    
    static async listarLivros (req,res,next) {
        try {
            const livrosResultado = await livro.find({}).populate("autor").exec();
            res.status(200).json(livrosResultado);
        } catch (erro) {
            next(erro);
        };
    };

    static async listarLivrosPorEditora (req,res,next) {
        const editora = req.query.editora;
        try {
            const livrosResultado = await livro.find({ editora: editora }).populate("autor").exec;
            res.status(200).json(livrosResultado);
        } catch (erro) {
            next(erro);
        };
    };

    static async listarLivroPorId (req,res,next) {
        try {
            const id = req.params.id;
            const livrosResultado = await livro.findById(id).populate("autor").exec();
            res.status(200).json(livrosResultado);
        } catch (erro) {
            next(erro);
        };
    };

    static async cadastrarLivro (req,res,next) {
        try {
            const novoLivro = await livro.create(req.body);
            res.status(201).json({ message: "Criado com sucesso", livro: novoLivro });
        } catch (erro) {
            next(erro);
        };
    };

    static async atualizarLivro (req,res,next) {
        try {
            const id = req.params.id;
            await livro.findByIdAndUpdate(id, req.body);
            res.status(200).json({ message: "Livro atualizado" });
        } catch (erro) {
            next(erro);
        };
    };

    static async excluirLivro (req,res,next) {
        try {
            const id = req.params.id;
            await livro.findByIdAndDelete(id);
            res.status(200).json({ message: "Livro excluído com sucesso" });
        } catch (erro) {
            next(erro);
        };
    };

};

export default LivroController;