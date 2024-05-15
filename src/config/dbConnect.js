import mongoose from "mongoose";

async function conectaNaDatabase() {
    // utilizando a biblioteca dotenv para conexão de forma segura
    mongoose.connect(process.env.DB_CONNECTION_STRING);

    return mongoose.connection;
}

export default conectaNaDatabase;