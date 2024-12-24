import { Controller, Get, Post, Body } from '@nestjs/common';
import { AppService } from './app.service';
import { SigninDto } from './dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post('/signin')
  signin(@Body() body: SigninDto) {
      return this.appService.signin(body);
  }
}
