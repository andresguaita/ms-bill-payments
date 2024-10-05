<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
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
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg" alt="Donate us"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow" alt="Follow us on Twitter"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

# 1. Estructura del Repositorios

Se propone una estructura de repositorios basada en el patron de clean architecture denominado [**Arquitectura Hexagonal**](https://blog.cleancoder.com/uncle-bob/2012/08/13/the-clean-architecture.html). El cual permitirá reutilizar la lógica inmersa en las implementaciones

A continuación se describe la estructura de repositorios a usar, este ejemplo se ilustra con archivos TypeScript como lenguaje de programación base:

```
root
├── __mocks__
├── src
│   ├── adapters
│   │   │   adapters.module.ts
│   ├── core
│   │   ├── cases
│   │   │   ├── impl
│   │   │   │   |   case-query.uc.impl.ts
│   │   │   │   |   case-register.uc.impl.ts
│   │   │   │  case-query.uc.ts
│   │   │   │  case-register.uc.ts
│   │   ├── domain
│   │   │   ├── models
│   │   │   │     transaction.model.ts
│   │   │  core.module.ts
│   ├── drivers
│   │   ├── impl
│   │   │   |   waybox.driver.impl.ts
│   │   │  waybox.driver.ts
│   │   │  adapters.module.ts
│   ├── commons
│   │   ├── config
│   │   │   │  env.validation.ts
│   │   │   │  general.config.ts
│   │   ├── response-codes
│   │   │   │  general.error.ts
│   │   │   │  general.messages.ts
│   │   ├── utils
│   │   │   │  exceptions-manager.filter.ts
│   │   │   │  general.util.ts
│   │   │   │  request-http.interceptor.ts
│   │   │   commons.module.ts
│   │ main.ts
│   │ app.module.ts
├── test
│   │   .env
│   ├── cases
│   │   │   case-query.test.ts
│   │   │   case-register.test.ts
│   ├── domain
│   ├── drivers
│   ├── adapters
│   tsconfig.json
│   .gitignore
|   .dockerignore
|   Dockerfile
│   azure-pipeline-ts.yml
│   package.json
│   README.md
```

- `__mocks__`: Esta carpeta tendrá los moks a las funciones de las librerias base. Por ejemplo: mocks de aws para los servicios utilizados en la funcinalidad
- `src`: Carpeta principal donde reposa el código fuente del repositorio

  - **`adapters`**: Los objetos ubicados en esta carpeta serán aquellos adaptadores que habilitarán la entrada al sistema, Ejemplo: ApiAdapter.ts o QueueAdapter.ts
  - **`core`**: Los objetos ubicados en esta carpeta serán aquellos con la lógica negocio propia de la aplicación.

    - `cases`: En esta carpeta estarán las inferfaces y las respectivas implementaciones de los casos de uso. Es decir, en este paquete deben ir las funciones que encapsulan la lógica de negocio
    - `domain`: En la capa de dominio se colocarán los modelos, interfaces y clases relacionados con el caso de uso.
      - `models`: Clases planas que representan las entidades inmersas en la lógica de negocio

  - **`drivers`**: Los objetos de tipo "driven" son aquellos adaptadores que habilitan la comunicación con infraestructura como bases de datos u origenes de datos, Ej: DynamoAccountManager.ts es un adaptador para alamacenar cuentas en dynamo DB.

  - **`commons`**: En esta carpeta estarán los componentes comunes o transversales de la aplicación, cómo configuración, utilidades y constantes

  - `main.ts`: El archivo de entrada de la aplicación que utiliza la función central NestFactory para crear una instancia de la aplicación Nest.
  - `app.module.ts`: El módulo raíz de la aplicación.

- `test`: En esta carpeta estarán todos los archivos de pruebas unitarias
  - `.env`: Este archivo tendrá las variables de entorno que serán necesarias inyectar en un contexto de pruebas unitarias
- `package.json`: Archivo en el cual se configuran propiedades del proyecto tales como: nombre, versión, dependencias, scripts, etc
- `tsconfig.json`: Archivo de configuración que especifica los archivos raíz y las opciones del compilador necesarias para compilar el proyecto
- `.env`: Este archivo tendrá las variables de entorno que serán necesarias para la ejecución de la aplicación.
- `README.md`: Este archivo deberá contener la descripción técnica de las capacidades implementadas o desarrolladas en el repositorio de código fuente
- `Dockerfile`: En este archivo se declararán todas las especificaciones técnicas para construir una imagen docker.
- `.gitignore`: Archivo de git que indicará los archivos que no deben ser tenidos en cuenta a la hora de versionar el repositorio
- `.dockerignore`: Archivo que ayuda a configurar el contexto de compilación de Docker permitiendo definir reglas para no incluir archivos y/o carpetas en el contexto de compilación.

# 2. Instalación de dependencias

```bash
$ npm install
```

# 3. Ejecución

```bash

#up docker database
$ docker-compose up -d

# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```