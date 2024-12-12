import { Injectable } from '@nestjs/common';
import { UserDto } from './dto/user.dto';

@Injectable()
export class UsersService {
  private users: UserDto[] = [
    { id: 1, first_name: 'John', last_name: 'Doe', age: 30 },
    { id: 2, first_name: 'Jane', last_name: 'Smith', age: 28 },
  ];

  findAll() {
    return this.users;
  }
}
