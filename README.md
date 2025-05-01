# Automated Backend Testing

En el presente taller, estaremos cubriendo Automated Testing orientado a back-end.

El proyecto a continuación incluye las siguientes tecnologias:

* NodeJS
* ExpressJS
* Knex
* PostgreSQL
* Dockers

Una vez el proyecto este en funcionamiento, incluiremos las siguientes tecnologias para crear nuestra Test Suite:

* Mocha
* Chai
* Sinon
* Supertest

## Objetivos

[] Proyecto inicial en funcionamiento - 15mins
   [] ExpressJS
   [] Contenedor de PostgreSQL en Dockers
[] Conceptos - 15-mins
[] Configurar Knex - 15mins
[] Definir esquema a traves de migraciones con Knex - 30mins
[] Crear operaciones y endpoints - 30mins
...15-min break...
[] Configurar Test Suite - 15-30mins
[] Crear tests

## Metodologia del Taller

Quienes esten familiarizados con el tema, sientanse libres de adelantarse con el setup de todas las tecnologias y apoyen a sus compañeros.

* Mientras haga live-coding, limitense a escuchar, observar y tomar apuntes
* Una vez termine el live-coding, hare un commit, push y abrire un pull request
* Cuando el Pull Request este abierto, todos tendran la oportunidad de escribir el codigo
* No copiar y pegar el codigo, vayan escribiendolo despacio linea por linea
* Una vez todos tengan el proyecto funcionando con los ultimos cambios, se mezcla el PR y continuamos con el siguiente tema

## Requisitos (conocimientos)

- HTTP
- API (REST)
- Fundamentos de Base de Datos
   - Base de Datos Relacionales
   - Consultas
   - Relaciones
   - Tablas, filas y columnas
   - Tipos de Datos
- Fundamentos de Tests Automatizados
- ORM y Query Builders - ¿Que son?

## Requisitos (proyecto)

- Node Version Manager (nvm)
- NodeJS
- Node Package Manager
- Dockers
- Postico o PGAdmin (o cualquier interfaz grafica preferida para interactuar con PostgreSQL)
- Postman

## Setup

Correr los siguientes comandos para instalar las dependencias de NodeJS:
- `nvm install && nvm use`
- `npm install`

Correr el siguiente comando para iniciar docker compose:

- `docker-compose up -d`
**nota**: -d es para correr el contenedor en background

Finalmente, para iniciar el proyecto:

- `npm run dev`

