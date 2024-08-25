import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
const cookieSession = require('cookie-session');
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // Note: moved this pipeline and middleware to the AppModule becz of e2e tests doen't work
  // app.use(cookieSession({
  //   keys: ['abcdef'],
  // }));
  // adding validation pipeline. This will intelligently apply when there is
  // validation DTO attached to the service

  // app.useGlobalPipes(
  //   new ValidationPipe({
  //     // remove non existing attributes from the request compare with
  //     // DTO before pass to service
  //     whitelist: true,
  //   }),
  // );

  await app.listen(3000);
}

bootstrap();
