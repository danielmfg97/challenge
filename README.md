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

1. Um cliente precisa de um sistema que seja capaz de decompor um n??mero em todos os seus divisores, enumerando tamb??m aqueles que forem primos. Obs.: N??o ?? permitido o uso de bibliotecas prontas, se houver, que fa??am a decomposi????o.

??? Dado um n??mero de entrada, o programa deve calcular todos os divisores que comp??em o n??mero.

??? Dado um n??mero de entrada, o programa deve calcular todos os divisores primos que comp??em o n??mero
Exemplo de Console:

Digite um n??mero: 45

Ap??s o usu??rio digitar o n??mero, Console pode mostrar:

N??mero de Entrada: 45

N??meros divisores: 1 3 5 9 15 45

Divisores Primos: 1 3 5

2. J?? temos nossa funcionalidade principal. Contudo, voc?? acaba de descobrir que essa funcionalidade vai ser usada em outros sistemas e, por isso, ?? necess??rio que seja disponibilizada um servi??o que forne??a as informa????es. Fique atento a:

??? Performance

??? Escalabilidade

??? Disponibilidade

??? Resili??ncia

??? Robustez

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

#Entrar no BASH ap??s subir o container
$ docker-compose exec app bash

#console-application
$ node ./src/console/index.ts <PAR??METRO>
```

## Rota

1. A fim de facilitar e eliminar o postman nessa projeto, na ra??z dele temos um arquivo api.http com a request j?? montada, basta clicar em 'send request'. 

IMPORTANTE: Para utilizar ?? necess??rio a extens??o  REST Client do VSCode

## Melhorias

1. Pode-se implementar o uso de um bando No-sql para que sejam salvos os n??meros que j?? foram calculados.

2. Incluir reposit??rios.

3. Infelizmente n??o tive tempo de implementar os Testes de unidade por conta de uma viagem programada.

4. Linter

5. Melhorar o validator da rota

6. Uso do GitFlow

## Test

```bash
# unit tests
$ npm run test
```

## License

Nest is [MIT licensed](LICENSE).
