import { Module } from '@nestjs/common';
import { EventEmitterModule } from '@nestjs/event-emitter';
import { AccountsModule } from './accounts/accounts.module';
import { SnapshotsModule } from './snapshots/snapshots.module';

@Module({
  imports: [EventEmitterModule.forRoot(), AccountsModule, SnapshotsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
