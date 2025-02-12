const express = require('express');
const app = express();
const port = 3000;

// Middleware para processar JSON
app.use(express.json());

// Rota principal - Hello World
app.get('/', (req, res) => {
  res.json({ message: 'Hello World!' });
});

// Rota de teste
app.get('/teste', (req, res) => {
  res.json({ message: 'Esta é uma rota de teste atuaslizada!' });
});

// Iniciando o servidor
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
}); 