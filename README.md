# API de Teste com Express + Docker

Uma API simples criada com Node.js e Express, containerizada com Docker.

## Estrutura do Projeto

- `index.js` - Arquivo principal da API
- `Dockerfile` - Configuração para construção da imagem Docker
- `docker-compose.yml` - Configuração para orquestração do container
- `.dockerignore` - Arquivos ignorados no build do Docker

## Rodando sem Docker

### Instalação
```bash
npm install
```

### Executando a API
```bash
# Modo desenvolvimento (com hot-reload)
npm run dev

# Modo normal
npm start
```

## Rodando com Docker

### Usando Docker Compose (Recomendado)

1. Iniciar a aplicação em segundo plano:
```bash
docker compose up -d
```

2. Verificar status do container:
```bash
docker compose ps
```

3. Visualizar logs:
```bash
docker compose logs -f
```

4. Parar a aplicação:
```bash
docker compose down
```

### Usando Docker diretamente

1. Construir a imagem:
```bash
docker build -t api-teste .
```

2. Executar o container:
```bash
docker run -p 3000:3000 api-teste
```

## Configurações do Docker

### Recursos e Limites
- CPU: Limitado a 50%
- Memória: Limitado a 500MB
- Restart automático em caso de falha
- Healthcheck a cada 30 segundos

### Volumes
- Código fonte mapeado para desenvolvimento
- Volume específico para node_modules

### Logs
- Rotação automática de logs
- Máximo 10MB por arquivo
- Mantém até 3 arquivos de log

## Rotas da API

- `GET /`: Retorna uma mensagem "Hello World"
- `GET /teste`: Retorna uma mensagem de teste

## Testando

Você pode testar as rotas usando curl ou seu navegador:

```bash
curl http://localhost:3000/
curl http://localhost:3000/teste
```

## Ambiente de Desenvolvimento

O ambiente está configurado para desenvolvimento com:
- Hot-reload do código fonte
- Volumes mapeados
- Variáveis de ambiente configuradas
- Healthcheck para monitoramento 