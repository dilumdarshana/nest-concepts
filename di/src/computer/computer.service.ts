import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { NetworkService } from '../network/network.service';

interface Computer {
  ip: string;
  name: string;
}

@Injectable()
export class ComputerService {
  private readonly computers: Computer[] = [];

  constructor(
    @Inject(forwardRef(() => NetworkService))
    private readonly networkService: NetworkService,
  ) {}

  addComputer(computer: Computer): void {
    this.computers.push(computer);

    // add network as well
    this.networkService.connectComputer();
  }

  getComputers(): Computer[] {
    return this.computers;
  }
}
