# Usando uma imagem Node.js oficial como base
FROM node:18-slim

# Instalando curl para healthcheck
RUN apt-get update && apt-get install -y curl && rm -rf /var/lib/apt/lists/*

# Definindo o diretório de trabalho no container
WORKDIR /build/docker-test

# Copiando os arquivos de dependências
COPY package*.json ./

# Instalando as dependências
RUN npm install

# Copiando o resto dos arquivos da aplicação
COPY . .

# Expondo a porta que a aplicação usa
EXPOSE 3000

# Comando para iniciar a aplicação
CMD ["npm", "start"]