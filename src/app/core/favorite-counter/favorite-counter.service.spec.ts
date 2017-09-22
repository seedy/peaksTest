import { TestBed, inject } from '@angular/core/testing';

import { FavoriteCounterService } from './favorite-counter.service';
import {MarvelCharacter} from '../../shared/marvel-character/marvel-character';
import 'rxjs/add/operator/take';

describe('FavoriteCounterService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FavoriteCounterService]
    });
  });

  it('should be created', inject([FavoriteCounterService], (service: FavoriteCounterService) => {
    expect(service).toBeTruthy();
  }));

  fit('checks onFavorite method', inject([FavoriteCounterService], (service: FavoriteCounterService) => {
    let char = new MarvelCharacter('1', 'john', 'doe', {path: 'url', extension: 'jpg'}, []);
    char.favorite = true;
    service.counterControl$.take(1).subscribe((list) => {
      expect(list).toEqual([char]);
    });
    // char is added to favorite before call to service
    service.onFavorite(char);

    service.counterControl$.take(1).subscribe((list) => {
      expect(list).toEqual([]);
    });

    char.favorite = false;

    service.onFavorite(char);

  }));

});
