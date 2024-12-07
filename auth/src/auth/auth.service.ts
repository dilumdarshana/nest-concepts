import { Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { verify } from 'argon2';
import { JwtService } from '@nestjs/jwt';
import { UserService } from '../user/user.service';
import { JwtPayload } from './types/jwt_payload';
import { TokenResponse } from './types/token_respone';
import { AuthResponse } from './types/common';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
  ) {}

  async signin({ username, password }) {
    const user = await this.userService.findByEmail(username);

    if (!user) throw new NotFoundException(`User ${username} not found`);

    if (!await verify(user.password, password)) {
      throw new UnauthorizedException(`User ${username} not authorized`);
    }

    const { accessToken, refreshToken } = await this.generateTokens(user);

    return {
      id: user.id,
      name: user.name,
      email: user.email,
      role: user.role_id,
      accessToken,
      refreshToken,
    }
  }

  async generateTokens(user): Promise<TokenResponse>{
    const payload: JwtPayload = { 
      sub: user.id,
      email: user.email,
      role: user.role_id,
    };

    const [accessToken] = await Promise.all([
      this.jwtService.signAsync(payload),
    ]);

    return {
      accessToken,
      refreshToken: null,
    };
  }

  async validateJwtUser(userId: number): Promise<AuthResponse> {
    const user = await this.userService.findById(userId);

    if (!user) throw new UnauthorizedException('Invalid token');

    return {
      id: user.id,
      name: user.name,
      email: user.email,
      role: user.role_id,
    }
  }
}
