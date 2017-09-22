import { Injectable } from '@angular/core';
import {Http, URLSearchParams} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import {MarvelCharacter} from './marvel-character';
import {marvelKeys} from '../../../../secret/marvel-keys';

@Injectable()
export class MarvelCharacterService {

  api = "http://gateway.marvel.com/v1/public/characters";

  constructor(
    private http: Http
  ) { }

  getList(index?: number, number?:number): Observable<any> {
    let params: URLSearchParams = new URLSearchParams();
    params.set('apikey', marvelKeys.apikey);
    params.set('orderBy', 'name');
    params.set('offset', index.toString());
    params.set('limit', number.toString());

    return this.http
      .get(this.api, { params: params})
      .map((response) => {
        let data = response.json().data;
        data.results = response.json().data.results
          .map((result) =>
            new MarvelCharacter(result.id, result.name, result.description, result.thumbnail, result.comics.items));
        return data;
      });
  }

}
