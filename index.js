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
app.get('/teste', async (req, res) => {
  //vamos fazer uma requisição GET para jsonplaceholder e retornar o resultado
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data = await response.json();
  res.json(data);
});

// Iniciando o servidor
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
}); 