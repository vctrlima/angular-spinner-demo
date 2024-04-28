import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class LoadingService {
  private loading$ = new BehaviorSubject<boolean>(false);

  public get loading() {
    return this.loading$.asObservable();
  }

  public setState(value: boolean) {
    this.loading$.next(value);
  }
}
