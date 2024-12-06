import { Controller, Post, Request, Body, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { SigninPayloadDto } from './dto/signin_payload.dto';
import { LocalAuthGuard } from '../auth/guards/local-auth.guard';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService){}

  @Post('signin')
  // @UseGuards(LocalAuthGuard)
  signin(@Body() body: SigninPayloadDto){
    return this.authService.signin(body);
  }
}
