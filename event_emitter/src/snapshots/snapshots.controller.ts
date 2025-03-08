import { Controller, Get } from '@nestjs/common';
import { Snapshot, SnapshotsService } from './snapshots.service';

@Controller('snapshots')
export class SnapshotsController {
  constructor(private snapshotsService: SnapshotsService) {}

  @Get()
  getSnapshots(): Snapshot[] {
    return this.snapshotsService.getSnapshots();
  }
}
