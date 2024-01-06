# Nome: Gustavo Reis Souza Lima

# E-mail: d7gustavoreissouzalima@gmail.com

# VetClinic API

## Description

VetClinic is an application for managing a veterinary clinic. It provides endpoints to perform operations related to animals and animal owners.

## Prerequisites

Versions used in the development of the application:

- **Node.js:** v20.4.0 or higher.
- **MongoDB Atlas:** You need to have an account and knowledge to set up environment variables with your credentials to test the application since it requires a connection to MongoDB to work with the routes.

In case of compatibility errors, it is recommended to use Nvm to change the Node version. [Tutorial to use Nvm](https://fabiojanio.medium.com/nvm-gerencie-m%C3%BAltiplas-instala%C3%A7%C3%B5es-do-node-js-6fcd0f13aaf7)

## Stack used

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

## How to install the project and start the application

```bash
# Clone the repository
$ git clone https://github.com/GustavoReisSouzaLima/challenger-01.git

# Enter the cloned repository
$ cd challenger-01

# Install project dependencies
$ npm i

# Create a .env file and configure the environment variables according to .env.example to connect to MongoDB Atlas
MONGO_URL = Add your connection string
PORT = Add your port

# Run the command to build and start the application
$ npm run start:prod

# Wait for the following message to know that the application is running
  - Connected to MongoDB Successfully!
  - Server is listening on http://localhost:3000

# Other scripts are available in the package.json file

By default, the application will be running on port 3000 if the port is not specified in the .env file.
```

## API Information

**Swagger:**

- To access the API documentation using Swagger, go to the route: http://localhost:3000/api-docs

**Insominia**

- There is also a file in the root directory named Insomnia.json, in case you want to import the routes using Insomnia.
