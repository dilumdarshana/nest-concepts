import { Injectable } from '@nestjs/common';
import { Account, AccountsService } from '../accounts/accounts.service';
import { OnEvent } from '@nestjs/event-emitter';
import { GenerateSnapshotsEvent } from './generate-snapshot.event';

export interface Snapshot {
  account: Account;
  date: Date;
}

@Injectable()
export class SnapshotsService {
  public readonly snapshots: Snapshot[] = [];

  constructor(private accountsService: AccountsService) {}

  @OnEvent('snapshots.generate')
  generateSnapshots(event: GenerateSnapshotsEvent) {
    // const accounts = this.accountsService.getAccounts();
    // console.log('xxxxx', event.account);
    // for (const account of accounts) {
    //   this.snapshots.push({
    //     account,
    //     date: new Date(),
    //   });
    // }
    this.snapshots.push({
      account: event.account,
      date: new Date(),
    });
  }

  getSnapshots() {
    return this.snapshots;
  }
}
