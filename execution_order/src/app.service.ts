import { Injectable, UnprocessableEntityException } from '@nestjs/common';
import { PostHelloDto } from './app.types';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  postHello(data: PostHelloDto) {
    console.log('Calling Service...', data);

    if (typeof data.age !== 'number') {
      throw new UnprocessableEntityException(
        'Invalid data. Age must be a number',
      );
    }
    return data;
  }
}
