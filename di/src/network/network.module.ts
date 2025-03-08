import { forwardRef, Module } from '@nestjs/common';
import { NetworkService } from './network.service';
import { NetworkController } from './network.controller';
import { ComputerModule } from '../computer/computer.module';

@Module({
  imports: [forwardRef(() => ComputerModule)],
  providers: [NetworkService],
  controllers: [NetworkController],
  exports: [NetworkService],
})
export class NetworkModule {}
