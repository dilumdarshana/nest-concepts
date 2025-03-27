import { Injectable, PipeTransform } from '@nestjs/common';

@Injectable()
export class MyPipe implements PipeTransform {
  transform(value: unknown) {
    console.log('calling pipe...');
    return value; // Return transformed value
  }
}
