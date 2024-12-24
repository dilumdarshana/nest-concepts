import { Injectable } from '@nestjs/common';
import { SigninDto } from './dto';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  signin(body: SigninDto) {
    return body;
  }
}
