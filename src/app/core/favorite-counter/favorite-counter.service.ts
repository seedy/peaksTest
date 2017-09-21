import { Injectable } from '@angular/core';
import {Subject} from 'rxjs/Subject';
import {MarvelCharacter} from '../../shared/marvel-character/marvel-character';

@Injectable()
export class FavoriteCounterService {

  private localCounter = [];
  private counter = new Subject<MarvelCharacter[]>();
  counterControl$ = this.counter.asObservable();

  constructor() { }

  onFavorite(char: MarvelCharacter): void {
    if(char.favorite) {
      this.localCounter.push(char);
    } else {
      let charIndex = this.localCounter.find((elem) => elem.id === char.id);
      if(charIndex !== -1){
        this.localCounter.splice(charIndex, 1);
      }
    }
    this.counter.next(this.localCounter);
  }

  canFavorite(): boolean {
    return this.localCounter.length < 5;
  }

}
