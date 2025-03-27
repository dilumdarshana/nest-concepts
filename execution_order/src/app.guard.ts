import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Observable } from 'rxjs';

@Injectable()
export class MyGuard implements CanActivate {
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const request: unknown = context.switchToHttp().getRequest();

    if (!request) return false;
    console.log('Guard is calling...');
    return true;
  }
}
