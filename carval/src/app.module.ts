import { Module, ValidationPipe, MiddlewareConsumer } from '@nestjs/common';
import { APP_PIPE } from '@nestjs/core';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
// import { AuthService } from './users/auth.service';
import { UsersModule } from './users/users.module';
import { ReportsModule } from './reports/reports.module';
import { User } from './users/user.entity';
import { Report } from './reports/report.entity';
const cookieSession = require('cookie-session');


@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: `.env.${process.env.NODE_ENV}`,
    }),
    TypeOrmModule.forRootAsync({
      inject: [ConfigService],
      useFactory: (config: ConfigService) => {
        return {
          type: 'sqlite',
          database: config.get<string>('DB_NAME'),
          entities: [User, Report],
          synchronize: true,
        }
      }
    }),
  //   TypeOrmModule.forRoot({
  //     type: 'sqlite',
  //     database: 'db.sqlite',
  //     entities: [User, Report],
  //     synchronize: true,
  // }), 
    UsersModule, ReportsModule],
  controllers: [AppController],
  providers: [
    AppService,
    {// setup global pipeline
      provide: APP_PIPE,
      useValue: new ValidationPipe({
        // remove non existing attributes from the request compare with
        // DTO before pass to service
        whitelist: true,
      }),
    }
  ],
})
export class AppModule {
  // setup global middleware
  configure(consumer: MiddlewareConsumer) {
    consumer
     .apply(cookieSession({
      keys: ['abcdef'],
    })).forRoutes('*')
  }
}
