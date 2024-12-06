import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UserService } from '../user/user.service';
import { PrismaService } from '../prisma/prisma.service';
import { AuthController } from './auth.controller';

@Module({
  providers: [AuthService, PrismaService, UserService],
  controllers: [AuthController]
})
export class AuthModule {}
