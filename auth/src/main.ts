import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(
    new ValidationPipe(
      {
        whitelist: true,
        transform: true,
        //forbidNonWhitelisted: true,
        skipMissingProperties: false,
      },
    ),
  );

  // get application port from .env. process.env.APP_PORT doesn't work here
  const configService = app.get(ConfigService);
  const port = configService.get<string>('APP_PORT');

  await app.listen(port);
}

bootstrap();
