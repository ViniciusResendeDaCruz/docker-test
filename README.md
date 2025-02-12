# API de Teste com Express

Uma API simples criada com Node.js e Express para fins de teste.

## Instalação

1. Instale as dependências:
```bash
npm install
```

## Executando a API

Para iniciar em modo de desenvolvimento (com hot-reload):
```bash
npm run dev
```

Para iniciar em modo normal:
```bash
npm start
```

## Rotas Disponíveis

- `GET /`: Retorna uma mensagem "Hello World"
- `GET /teste`: Retorna uma mensagem de teste

## Testando

Você pode testar as rotas usando curl ou seu navegador:

```bash
curl http://localhost:3000/
curl http://localhost:3000/teste
``` 