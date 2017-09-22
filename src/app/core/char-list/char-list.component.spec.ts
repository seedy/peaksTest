import {async, ComponentFixture, TestBed, fakeAsync, tick} from '@angular/core/testing';

import { CharListComponent } from './char-list.component';
import {MarvelCharacterService} from '../../shared/marvel-character/marvel-character.service';
import {CharDetailComponent} from '../char-detail/char-detail.component';
import {FavoriteCounterService} from '../favorite-counter/favorite-counter.service';
import {MdProgressSpinnerModule, MdPaginatorModule, MdDialogModule} from '@angular/material';
import {FavoriteBtnComponent} from '../../shared/favorite-btn/favorite-btn.component';
import {HttpModule} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/fromPromise';
import {MarvelCharacter} from '../../shared/marvel-character/marvel-character';
import {By} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {BrowserDynamicTestingModule} from '@angular/platform-browser-dynamic/testing';

describe('CharListComponent', () => {
  let component: CharListComponent;
  let fixture: ComponentFixture<CharListComponent>;
  let marvelCharacterService: MarvelCharacterService;
  let init, getList;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        CharListComponent,
        CharDetailComponent,
        FavoriteBtnComponent
      ],
      imports: [
        BrowserAnimationsModule,
        MdProgressSpinnerModule,
        MdPaginatorModule,
        MdDialogModule,
        HttpModule
      ],
      providers: [
        MarvelCharacterService,
        FavoriteCounterService
      ],

    });
    TestBed.overrideModule(BrowserDynamicTestingModule, {
      set: {
        entryComponents: [
          CharDetailComponent
        ]
      }
    });
    TestBed.compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CharListComponent);
    component = fixture.componentInstance;
    // retrieve injected service
    marvelCharacterService = fixture.debugElement.injector.get(MarvelCharacterService);

    // spy on 'ngOnInit' method
    init = spyOn(component, 'ngOnInit');

    // spy on 'marvelCharacter service method 'getList'
    getList = spyOn(marvelCharacterService, 'getList').and.returnValue(Promise.resolve([]));

    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('should have scope initialized', () => {

    expect(component.characters).toEqual([]);
    expect(component.isLoading).toEqual(false);
    expect(component.pagination).toEqual(jasmine.objectContaining({
      count: 0,
      limit: 20,
      index: 5,
      total: 0
    }));
    expect(component.favorites).toEqual([]);
    expect(component.loadCharacters).toEqual(jasmine.any(Function));
    expect(component.showDetail).toEqual(jasmine.any(Function));
    expect(component.observeFavorites).toEqual(jasmine.any(Function));

  });

  it('should implement onInit', () => {
    init.calls.reset();
    component.ngOnInit();
    expect(init.calls.count()).toEqual(1);

    init.and.callThrough();
    let loadCharacters = spyOn(component, 'loadCharacters');
    let observeFavorites = spyOn(component, 'observeFavorites');

    component.ngOnInit();

    expect(loadCharacters).toHaveBeenCalledWith(component.pagination.index, component.pagination.limit);
    expect(observeFavorites).toHaveBeenCalled();

  });

  it('checks loadCharacters method async', fakeAsync(() => {
    let mockResponse = {
      count: 1,
      limit: 18,
      offset: 36,
      total: 99,
      results: []
    };
    getList.and.returnValue(Observable.fromPromise(Promise.resolve(mockResponse)));

    expect(component.isLoading).toEqual(false);

    component.loadCharacters(mockResponse.offset / mockResponse.limit, mockResponse.limit);

    expect(component.isLoading).toEqual(true);
    expect(getList).toHaveBeenCalledWith(mockResponse.offset, mockResponse.limit);

    tick();

    expect(component.isLoading).toEqual(false);
    expect(component.pagination).toEqual(jasmine.objectContaining({
      count: mockResponse.count,
      limit: mockResponse.limit,
      index: mockResponse.offset / mockResponse.limit,
      total: mockResponse.total,
    }));
    expect(component.characters).toEqual(mockResponse.results);

  }));

  it('checks showDetail method', () => {
    let char = new MarvelCharacter('1', 'john', 'doe', {path: 'url', extension: 'jpg'}, []);

    component.showDetail(char);

    fixture.detectChanges();

    expect(document.querySelector('md-dialog-container')).not.toBeNull();
  });

});
