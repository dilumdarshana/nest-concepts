import { Injectable } from '@nestjs/common';
import { hash } from 'argon2';
import { PrismaService } from '../prisma/prisma.service';
import { SignupPayloadDto } from '../auth/dto/signup_payload.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UserService {
  constructor(private prismaService: PrismaService) {}

  async create(user: SignupPayloadDto) {
    const { password } = user;

    const hasedPassword = await hash(password);

    return this.prismaService.user.create({
      data: {
        ...user,
        password: hasedPassword,
        role_id: 1,
      }
    });
  }

  findAll() {
    return `This action returns all userdd`;
  }

  findById(id: number) {
    return this.prismaService.user.findUnique({ 
      where: {
        id,
      },
    });
  }

  findByEmail(email: string) {
    return this.prismaService.user.findUnique({
      where: {
        email,
      },
    });
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
