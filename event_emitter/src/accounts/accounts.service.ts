import { Injectable } from '@nestjs/common';
import { EventEmitter2 } from '@nestjs/event-emitter';
import { GenerateSnapshotsEvent } from '../snapshots/generate-snapshot.event';

export interface Account {
  name: string;
  amount: number;
}

@Injectable()
export class AccountsService {
  private readonly accounts: Account[] = [];

  constructor(private readonly eventEmitter: EventEmitter2) {}

  create(account: Account) {
    this.accounts.push(account);

    // produce event notification
    this.eventEmitter.emit(
      'snapshots.generate',
      new GenerateSnapshotsEvent(account),
    );
  }

  getAccounts() {
    return this.accounts;
  }
}
