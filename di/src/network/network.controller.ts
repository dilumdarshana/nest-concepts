import { Controller, Get } from '@nestjs/common';
import { NetworkService } from './network.service';

@Controller('network')
export class NetworkController {
  constructor(private netWorkService: NetworkService) {}

  @Get()
  getConnectedComputers(): string[] {
    return this.netWorkService.getConnectedComputers();
  }
}
