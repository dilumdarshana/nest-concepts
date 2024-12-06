# Authentication and Authorization

## Generate Nest app
```bash
nest new auth
 ```

## Generate auth module
- To manage the authentication auth authorization. Eg. signup, signin, etc.
```bash
nest g module auth
 ```

 ## Generate user module
 - Why user module? User crud related operations handling. Eg. create user, get user, etc.
```bash
nest g module user
 ```

## Adding Prisma
```bash
# Add Prisma and initialize
npm i -D prisma
npx prisma init # This will create prisma folder and .env file in the current working directory
```

## Adding Prisma client
```bash
npm install @prisma/client
```

## Adding JWT

## Adding Passport