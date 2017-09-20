import { TestBed, inject } from '@angular/core/testing';

import { MarvelCharacterService } from './marvel-character.service';

describe('MarvelCharacterService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MarvelCharacterService]
    });
  });

  it('should be created', inject([MarvelCharacterService], (service: MarvelCharacterService) => {
    expect(service).toBeTruthy();
  }));
});
