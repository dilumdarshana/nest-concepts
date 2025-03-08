import { Account } from '../accounts/accounts.service';

export class GenerateSnapshotsEvent {
  constructor(readonly account: Account) {}
}
