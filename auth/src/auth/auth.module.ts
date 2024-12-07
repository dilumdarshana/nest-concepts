import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { ConfigModule } from '@nestjs/config';
import { AuthService } from './auth.service';
import { UserService } from '../user/user.service';
import { PrismaService } from '../prisma/prisma.service';
import { AuthController } from './auth.controller';
import { JwtStrategy } from './strategies/jwt.strategy';
import { JWTRefreshStrategy } from './strategies/jwt.refresh.strategy';
import jwtRefreshConfig from './config/jwt.refresh.config';

@Module({
  imports: [
    // without using nest config module
    JwtModule.register({
      secret: process.env.JWT_SECRET,
      signOptions: { expiresIn: process.env.JWT_EXPIRATION },
    }),
    // JWT refresh token configuration using nest config module
    ConfigModule.forFeature(jwtRefreshConfig), 
  ],
  providers: [
    AuthService,
    PrismaService,
    UserService,
    JwtStrategy,
    JWTRefreshStrategy,
  ],
  controllers: [AuthController]
})
export class AuthModule {}
