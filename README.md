<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

Technical Challenge

1. Um cliente precisa de um sistema que seja capaz de decompor um número em todos os seus divisores, enumerando também aqueles que forem primos. Obs.: Não é permitido o uso de bibliotecas prontas, se houver, que façam a decomposição.

● Dado um número de entrada, o programa deve calcular todos os divisores que compõem o número.

● Dado um número de entrada, o programa deve calcular todos os divisores primos que compõem o número
Exemplo de Console:

Digite um número: 45

Após o usuário digitar o número, Console pode mostrar:

Número de Entrada: 45

Números divisores: 1 3 5 9 15 45

Divisores Primos: 1 3 5

2. Já temos nossa funcionalidade principal. Contudo, você acaba de descobrir que essa funcionalidade vai ser usada em outros sistemas e, por isso, é necessário que seja disponibilizada um serviço que forneça as informações. Fique atento a:

● Performance

● Escalabilidade

● Disponibilidade

● Resiliência

● Robustez

## Installation

```bash
npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod

#docker
$ docker-compose up

#Entrar no BASH após subir o container
$ docker-compose exec app bash

#console-application
$ node ./src/console/index.ts <PARÂMETRO>
```

## Rota

1. A fim de facilitar e eliminar o postman nessa projeto, na raíz dele temos um arquivo api.http com a request já montada, basta clicar em 'send request'. 

IMPORTANTE: Para utilizar é necessário a extensão  REST Client do VSCode

## Melhorias

1. Pode-se implementar o uso de um bando No-sql para que sejam salvos os números que já foram calculados.

2. Incluir repositórios.

3. Infelizmente não tive tempo de implementar os Testes de unidade por conta de uma viagem programada.

4. Linter

## Test

```bash
# unit tests
$ npm run test
```

## License

Nest is [MIT licensed](LICENSE).
