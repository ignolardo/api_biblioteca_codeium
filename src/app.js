const express = require("express");
const mongoose = require("mongoose");

const { auth } = require("express-oauth2-jwt-bearer");
const errorHandler = require("./middlewares/errorHandler");


require('dotenv').config();

// Configuracion Middleware con el Servidor de Autorización 
const autenticacion = auth({
  audience: process.env.OAUTH_AUDIENCE,
  issuerBaseURL: process.env.OAUTH_URL,
  tokenSigningAlg: "RS256",
});


const app = express();
app.use(express.json());

// Importamos el Router de Libros
const librosRouter = require("./routes/libros");

const usuariosRouter = require("./routes/usuarios");

//Configuramos el middleware de autenticacion
app.use("/api/libros", autenticacion,  librosRouter);

app.use("/api/usuarios", autenticacion, usuariosRouter);

app.use("/usuarios", autenticacion, usuariosRouter);

app.use(errorHandler);

app.listen(3000, () => {
  console.log("Servidor iniciado en el puerto 3000");
  mongoose.connect(process.env.MONGO_DB, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    family: 4
  });
});

module.exports = app;