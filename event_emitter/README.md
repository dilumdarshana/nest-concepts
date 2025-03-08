# Event Emitter integration

## Project setup

```bash
$ pnpm install

# how to add event emitter
$ pnpm add @nestjs/event-emitter

# update app.module.ts to load EventEmitterModule as an import

# emit event from service with specific key

# consume from other service using @OnEvent decorator
```

## Compile and run the project

```bash
# development
$ pnpm run start

# watch mode
$ pnpm run start:dev

# production mode
$ pnpm run start:prod
```

## Run tests

```bash
# unit tests
$ pnpm run test

# e2e tests
$ pnpm run test:e2e

# test coverage
$ pnpm run test:cov
```