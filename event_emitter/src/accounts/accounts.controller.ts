import { Body, Controller, Post } from '@nestjs/common';
import { AccountsService } from './accounts.service';

interface CreateUserDto {
  name: string;
  amount: number;
}

@Controller('accounts')
export class AccountsController {
  constructor(private accountsService: AccountsService) {}

  @Post()
  create(@Body() body: CreateUserDto) {
    this.accountsService.create(body);
  }
}
