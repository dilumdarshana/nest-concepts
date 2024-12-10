import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { PrismaService } from './prisma/prisma.service';
import { validate } from './config/env.validation';
import { AdminModule } from './admin/admin.module';

@Module({
  imports: [
    // attach nest config module
    ConfigModule.forRoot({
      isGlobal: true,
      validate, // validate .env configuration against the config/env.validation.ts file
    }),
    AuthModule,
    AdminModule,
  ],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
