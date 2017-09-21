import { Injectable } from '@angular/core';
import {Subject} from 'rxjs/Subject';

@Injectable()
export class FavoriteCounterService {

  private localCount = 0;
  private counter = new Subject<number>();
  counterControl$ = this.counter.asObservable();

  constructor() { }

  onFavorite(state: boolean): void {
    if(state) {
      this.localCount++;
    } else {
      this.localCount--;
    }

    this.counter.next(this.localCount);
  }

  canFavorite(): boolean {
    return this.localCount < 5;
  }

}
