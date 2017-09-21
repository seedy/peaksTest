import { TestBed, inject } from '@angular/core/testing';

import { FavoriteCounterService } from './favorite-counter.service';

describe('FavoriteCounterService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FavoriteCounterService]
    });
  });

  it('should be created', inject([FavoriteCounterService], (service: FavoriteCounterService) => {
    expect(service).toBeTruthy();
  }));
});
