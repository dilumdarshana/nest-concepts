import {
  Body,
  Controller,
  Get,
  Post,
  UseGuards,
  UseInterceptors,
  UsePipes,
} from '@nestjs/common';
import { AppService } from './app.service';
import { MyInterceptor } from './app.interceptor';
import { MyGuard } from './app.guard';
import { MyPipe } from './app.pipe';
import { PostHelloDto } from './app.types';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @UseGuards(MyGuard)
  @UseInterceptors(MyInterceptor)
  @UsePipes(MyPipe)
  @Post()
  postHello(@Body() data: PostHelloDto): PostHelloDto {
    console.log('Controller -> Hello');

    return this.appService.postHello(data);
  }
}
