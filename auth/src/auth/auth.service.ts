import { Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { verify } from 'argon2';
import { UserService } from '../user/user.service';

@Injectable()
export class AuthService {
  constructor(private userService: UserService) {}

  async signin({ username, password }) {
    const user = await this.userService.findByEmail(username);

    if (!user) throw new NotFoundException(`User ${username} not found`);

    if (!await verify(user.password, password)) {
      throw new UnauthorizedException(`User ${username} not authorized`);
    }

    return { id: user.id, name: user.name, email: user.email, role: user.role_id }
  }
}
