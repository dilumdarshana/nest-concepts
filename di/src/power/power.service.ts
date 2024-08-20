import { Injectable } from '@nestjs/common';

@Injectable()
export class PowerService {
  supplyPower(watt: number): void {
    console.log('supplying power', watt);
  }
}
