const express = require("express") // importa o construtor do express
const path = require("path")

const app = express(); 
const PORT = 5000   // Indico a porta que irá rodar o serviço


app.use(express.static(path.join(__dirname, "client")))   // Estou indicando o meu diretório estático client onde está minhas páginas http.

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "client", "index.html"));
});

app.listen(5000,"0.0.0.0" ,() => {
    console.log(`Servidor iniciado na porta:${PORT} - http://localhost:${PORT}/`);
} )