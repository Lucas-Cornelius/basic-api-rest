import express from "express";
import conectaNaDatabase from "./config/dbConnect.js";
import routes from "./routes/index.js";
import manipulaErros from "./middlewares/manipulaErros.js";

const conexao = await conectaNaDatabase();

conexao.on("error", (erro) => {
    console.error("Erro de conexão com banco de dados:", erro);
});

conexao.once("open", () => {
    console.log("Conexão com o banco de dados feita com sucesso!");
});

const app = express();
app.use(express.json())
routes(app);

app.use(manipulaErros);

export default app;
