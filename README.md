# Executando com Docker

Este arquivo contém um passo-a-passo para executar a aplicação localmente com uso da ferramenta Docker.

## Pré-Requisitos

- Docker: Version 20.10.0 or higher
- Git: Version 2.28.0 or higher
- Docker Compose: Version 1.27.0 or higher

## Clonar o repositório

1. Abra uma interface de linha de comando (Terminal, Prompt de ComandO).
2. Navegue até o local onde deseja clonar o repositório
3. Execute o comando abaixo:

   ```bash
   git clone git@github.com:ribeiroisaac/github-app.git
   ```

## Docker Compose

1. Navegue até a pasta do repositório clonado.
2. Verifique que o repositório foi clonado com sucesso, principalmente contendo o arquivo "docker-compose.yaml".
3. Abra uma interface de linha de comando na pasta clonada e execute o comando abaixo:

   ```bash
   docker-compose up --build -d
   ```

   O comando acima cria uma imagem Docker com base no arquivo docker-compose.yaml, e inicia o container Docker da aplicação em modo background. 

## Acessando aplicação

Após as instalações e inicialização do container é possível verificar a aplicação com os seguintes passos:

1. Abra um navegador Web e navegue até `http://localhost:5000`.
   
## Desligando aplicação

Para parar a aplicação e remover os containers criados pelo Docker Compose, siga os passos abaixo:

1. Abra uma interface de linha de comando.
2. Execute o comando:

   ```bash
   docker-compose down
   ```
