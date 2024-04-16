import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {
  private users = [
    {
      id: 1,
      name: 'John',
      email: 'john@gmail.com',
      role: 'ADMIN'
    },
    {
      id: 2,
      name: 'Jane',
      email: 'jane@gmail.com',
      role: 'INTERN'
    },
    {
      id: 3,
      name: 'Peter',
      email: 'peter@gmail.com',
      role: 'ADMIN'
    },
    {
      id: 4,
      name: 'Mary',
      email:'mary@gmail.com',
      role: 'ENGINEER'
    },
    {
      id: 5,
      name: 'Bob',
      email: 'bob@gmail.com',
      role: 'ENGINEER'
    }
  ]

  findAll(role?: 'INTERN' | 'ENGINEER' | 'ADMIN') {
    if (role) {
      const usersList = this.users.filter(user => user.role === role);

      if (usersList.length === 0) throw new NotFoundException('No users found');

      return usersList;
    }
    return this.users;
  }

  findOne(id: number) {
    const user = this.users.find(user => user.id === id);

    if (!user) throw new NotFoundException('User not found');

    return user;
  }

  create(user: CreateUserDto) {
    const usersSorted = this.users.sort((a, b) => b.id - a.id);

    const newUser = {
      id: usersSorted[0].id + 1,
     ...user
    }

    this.users.push(newUser);
    return newUser;
  }

  update(id: number, user: UpdateUserDto) {
    this.users = this.users.map((usr) => {
      if (usr.id === id) {
        return {
          ...usr,
          ...user
        }
      }
      return usr;
    });

    return this.findOne(id);
  }

  delete(id: number) {
    const removedUser = this.findOne(id);

    this.users = this.users.filter(user => user.id !== id);

    return removedUser;
  }
}
