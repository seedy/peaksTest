import {TestBed, async} from '@angular/core/testing';

import { MarvelCharacterService } from './marvel-character.service';
import {
  HttpModule, ConnectionBackend, RequestOptions,
  BaseRequestOptions, Http, ResponseOptions, Response
} from '@angular/http';
import {MockBackend, MockConnection} from '@angular/http/testing';
import {marvelKeys} from '../../../../secret/marvel-keys';
import {BrowserModule} from '@angular/platform-browser';
import {ReflectiveInjector} from '@angular/core';
import {MarvelCharacter} from './marvel-character';

describe('MarvelCharacterService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        BrowserModule,
        HttpModule
      ],
      providers: [
        MarvelCharacterService,
      ]
    });

    this.injector = ReflectiveInjector.resolveAndCreate([
      {provide: ConnectionBackend, useClass: MockBackend},
      {provide: RequestOptions, useClass: BaseRequestOptions},
      Http,
      MarvelCharacterService
    ]);
    this.service = this.injector.get(MarvelCharacterService);
    this.backend = this.injector.get(ConnectionBackend) as MockBackend;
  });

  it('should be created', () => {
    expect(this.service).toBeTruthy();
  });

  it('checks getList method async', async(() => {

    const offset = 5;
    const limit = 25;
    const expectedUrl = this.service.api;
    const params = '?apikey=' + marvelKeys.apikey + '&orderBy=name' + '&offset=' + offset + '&limit=' + limit;
    let json = {
      results: [
        {id: 2, name: 'test', description: 'doe', thumbnail: {}, comics: {items: []}}
      ]
    };

    this.backend.connections.subscribe((connection: MockConnection) => {
      let options = new ResponseOptions({
        body: JSON.stringify({data: json})
      });

      connection.mockRespond(new Response(options));
      expect(connection.request.url).toEqual(expectedUrl + params);
    });

    this.service.getList(offset, limit)
      .subscribe((response) => {
      expect(response).toEqual(jasmine.objectContaining({
        results: jasmine.arrayContaining([jasmine.any(MarvelCharacter)])
      }));
    });

  }));

});
