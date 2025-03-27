import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // this depends on class-validator and class-transformer npm modules
  // use case:
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      transform: true,
      skipMissingProperties: false,
    }),
  );

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
