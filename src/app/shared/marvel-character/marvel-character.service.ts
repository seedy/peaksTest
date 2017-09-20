import { Injectable } from '@angular/core';
import {Http} from '@angular/http';

import { marvelKeys } from 'secret/marvel-keys';

import { Observable } from 'rxjs/Observable';
import {MarvelCharacter} from './marvel-character';

@Injectable()
export class MarvelCharacterService {

  api = "http://gateway.marvel.com/v1/public/characters";

  constructor(
    private http: Http
  ) { }

  getList(index?: number, number?:number): MarvelCharacter[] {

    return this.http
      .get(api, { params:  })
  }

}
