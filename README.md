## Engines

```
node: ^12.18
npm: ^6.11
yarn: ^1.22
```

## Installation

```bash
$ yarn
```

## Running the app

Start the environment first

```
$ docker-compose up -d
```

Run the app

```bash
# development
$ yarn start

# watch mode
$ yarn start:dev

# production mode
$ yarn start:prod
```

Then visit http://localhost:3000/graphql

## Test

```bash
# unit tests
$ yarn test

# e2e tests
$ yarn test:e2e

# test coverage
$ yarn test:cov
```

## Create files

```bash
nest g module app/modules/<module_name>
nest g controller app/modules/<controller_name>
nest g service app/modules/<service_name>
```

## Readings

[Nest doc](https://docs.nestjs.com/graphql/quick-start)

[Nest Github read the examples](https://github.com/nestjs/nest)

[Think in GraphQL](https://ithelp.ithome.com.tw/users/20111997/ironman/1878)

[Fetch GraphQL API by graphql-request library](https://www.npmjs.com/package/graphql-request)
