# Microservice based on NATS

## Generate a new nest project
```bash
nest new microservice_nats
```

## Convert project to microservice project (mono repo)
```bash
# after convert to microservice, delete the microservice_nats app inside apps folder
# and keep in mind to update nest-cli.json file
nest generate app api-gateway
```

## Generate other services
```bash
nest generate app users
nest generate app books
```

## Enable microservice features in Nest
```bash
# install following from the root
npm i @nestjs/microservices
```

## add users module,service and controller to the api gateway service
```bash
# run this from root for users service
nest generate module users --project api-gateway
nest generate service users --project api-gateway
nest generate controller users --project api-gateway

# for books service
nest generate resource books --project api-gateway
```
## start api gateway server
```bash
# nest start <service_name> --watch
nest start api-gateway --watch
nest start books --watch
nest start users --watch
```

## sharing DTOs in between gateway and other services - Nest Library
```bash
# generate a nest library from root prefix with @app
nest generate library contracts

# delete everything inside libs/contracts/src
rm -rf libs/contracts/src/*

# create a books folder
mkdir libs/contracts/src/books

# copy existing DTOs to the contract library
cp apps/books/src/books/dto/* libs/contracts/src/books

# now import DTOs from contract wherever needed. eg. from books service
import { CreateBookDto, UpdateBookDto, BookDto } from '@app/contracts/books';
```

## define each service ports in a common location

