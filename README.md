# VetClinic API

## Descrição

VetClinic é uma aplicação de gerenciamento de uma clínica veterinária. Ela fornece endpoints para realizar operações relacionadas a animais e proprietários dos animais.

## Pré-requisitos

Versões utilizadas no desenvolvimento da aplicação:

- **Node.js:** v20.4.0 ou superior.
- **MongoDB Atlas:** Necessário ter uma conta e conhecimentos para configurar com suas credenciais as variáveis de ambiente para testar a aplicação, pois é necessário a conexão com MongoDB para funcionamento das rotas.

Em caso de erros de compatibilidade, é recomendado utilizar o Nvm para alterar a versão do Node. [Tutorial para utilizar Nvm](https://medium.com/linkapi-solutions/conventional-commits-pattern-3778d1a1e657)

## Stack utilizada

**Back-end:**

- TypeScript
- Express
- MongoDB Atlas - Mongoose
- dotenv
- Swagger-ui-express.

**Dev Tools:**

- Nodemon
- Eslint
- Prettier
- Jest
- Insomnia

## Como instalar o projeto e iniciar a aplicação

```bash
# Clone o repositório
$ git clone https://github.com/GustavoReisSouzaLima/challenger-01.git

# Entre no repositório clonado
$ cd challenger-01

# Instale as dependências do projeto
$ npm i

# Crie um arquivo .env e configure as variáveis de ambiente de acordo com .env.example para conectar com o MongoDB Atlas
MONGO_URL = Add your connection string
PORT = Add your port

# Rode o comando para buildar e iniciar a aplicação
$ npm run start:prod

# Aguarde a seguinte mensagem para saber que a aplicação está funcionando
  - Connected to MongoDB Sucessfull!
  - Server is listening on http://localhost:3000

# Outros scripts estão disponíveis no arquivo package.json

Por padrão, a aplicação estará rodando na porta 3000 caso a porta não seja especificada no arquivo .env
```

## Informações da API

**Swagger:**

- Para acessar as informações da documentação da API utilizando o Swagger, acesse a rota: http://localhost:3000/api-docs

**Insominia**

- Também há um arquivo no diretório raiz nomeado como **Insomnia.json**, caso queira importar as rotas utilizando o Insomnia.
