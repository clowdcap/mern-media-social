// Importando Bibilotecas e Frameworks
const express = require("express")
const mongoose = require("mongoose")
const dotenv = require("dotenv")
const helmet = require("helmet")
const morgan = require("morgan")

// Importando aplicação local
const userRoute = require("./routes/users")
const authRoute = require("./routes/auth")

// Referenciando as primeiras bibliotecas
dotenv.config()
const router = express.Router()
const app = express()

// Conectando ao Banco de Dados MongoDB
mongoose.connect(
    process.env.MONGO_URL,
    { useNewUrlParser: true, useUnifiedTopology: true }, () => {
        console.log("MongoDB::: Log Database::: Conectado!")
    }
)

/* Estabelecendo parametros e diretrizes inicias */
app.use(express.json())
app.use(helmet())
app.use(morgan("common"))

/* Definindo a rota iniciais e demais rotas */
app.get("/", (req, res) => {
    res.send('Página Inicial')
})

app.use("/api/auth", authRoute)
app.use("/api/users", userRoute)

app.get("/users", (req, res) => {
    res.send('Página Users')
})

/* Ligando o servidor Node Js */

/* Constantes do servidor */
const PORT = '8000'
const endereco = `http://127.0.0.1:${PORT}/`

app.listen(PORT, () => {
    console.log(`Node JS::: Log Servidor::: ${endereco}`)
})
  
