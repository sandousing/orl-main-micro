# Nestjs Stack Backend template ( [neststack-backend-template](https://github.com/sandousing/neststack-backend-template.git) )

## Description

It is a NestJs based template which has features to start the rapid development of any backend project.
Yarn has been used as a package manager for better package locking mechanism and caching.
Eslint and Prettier has been used in this project for commit message pattern and beautifying the code.
Husky has been used to automate the linting and beautifying the code.

1. Routing Controllers
2. Custom Logger
3. Swagger
4. Passport Authentication
5. JWT based authentication
6. Authrization Gaurd
7. Typeorm integration with Mariadb
8. Eslint
9. Prettify
10. Husky with commit lint

Features included in this backend template

-   **Swagger documentation** for APIs - path : ip_address/api/gitswagger
-   **Compodoc documentation** for the whole application - path : ip_address:8000
-   **Custom Logger service**
-   **Custom HTTP Exception service**
-   **Event/Message based pub-sub** channel with **REDIS microservice**
-   **Request Middleware** - adds unique request Id to each request
-   **Dockerized** container with development mode
-   **Dockerized** container with production mode
-   **TsDoc** based documentation for the controllers and services
-   **Test Cases** for the API endpoint

## How to run this application

-   Option 1 : Github way of cloning repositories

## Installation

```bash
$ yarn install
```

#### Option 1: Running project locally

-   NPM/Node should be preinstalled in the host machine
-   Redis should be installed and running in the host machine
-   Please add **github auth token** to make more than the limited github calls
    Follow the below commands to run project locally

````
git clone https://github.com/sandousing/neststack-backend-template.git

cd neststack-backend-template

touch .env
    - Add the values for APP_PORT, ROUTE_PREFIX, SWAGGER_PATH

yarn run doc
    -  visit (http://localhost:8080) to view the documentation
    -  visit (http://localhost/api/gitswagger) for swagger documentation


## Running the app

```bash
# development
$ yarn run start

# watch mode
$ yarn run start:dev

# production mode
$ yarn run start:prod
````

## Test

```bash
# unit tests
$ yarn run test

# e2e tests
$ yarn run test:e2e

# test coverage
$ yarn run test:cov
```

## Stay in touch

-   Author - [Sandeep Ghosh](http://sandeepghosh.com)

## License

Nest is [MIT licensed](LICENSE).

# neststack-backend-template
