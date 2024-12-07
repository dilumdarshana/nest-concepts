import { Controller, Post, Get, Body, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { SigninPayloadDto } from './dto/signin_payload.dto';
import { JwtAuthGuard } from './guards/jwt-auth.guard';
import { LocalAuthGuard } from '../auth/guards/local-auth.guard';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService){}

  /**
   * Validate user and return the user if valid
   * @param body username and password
   * @returns user infor and access token
   */
  @Post('signin')
  // @UseGuards(LocalAuthGuard)
  signin(@Body() body: SigninPayloadDto){
    return this.authService.signin(body);
  }

  /**
   * Authenticated route.
   */
  @UseGuards(JwtAuthGuard)
  @Get('whoami')
  whoami() {
    return 'i am no one'
  }
}
