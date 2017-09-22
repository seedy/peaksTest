import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FavoriteBtnComponent } from './favorite-btn.component';
import {MdIconModule, MdButtonModule} from '@angular/material';
import {FavoriteCounterService} from '../../core/favorite-counter/favorite-counter.service';
import {MarvelCharacter} from '../marvel-character/marvel-character';
import {By} from '@angular/platform-browser';

describe('FavoriteBtnComponent', () => {
  let component: FavoriteBtnComponent;
  let fixture: ComponentFixture<FavoriteBtnComponent>;
  let mockCharacter = new MarvelCharacter('1', 'john', 'doe', {path: 'url', extension: 'jpg'}, [], false);
  let favoriteCounter: FavoriteCounterService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FavoriteBtnComponent ],
      imports: [
        MdIconModule,
        MdButtonModule
      ],
      providers: [
        FavoriteCounterService
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FavoriteBtnComponent);
    component = fixture.componentInstance;
    // retrieve injected service
    favoriteCounter = fixture.debugElement.injector.get(FavoriteCounterService);
    // set input
    component.character = mockCharacter;

    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('should have a button tag with one md-icon as child', () => {
    expect(fixture.debugElement.query(By.css('button'))).not.toBeNull();

    // depending on favorite value, the icon is different
    expect(fixture.debugElement.query(By.css('button md-icon'))).not.toBeNull();
  });

  it('should have not favorite md-icon', () => {
    component.character.favorite = false;
    fixture.detectChanges();

    expect(fixture.debugElement.query(By.css('button md-icon')).nativeElement.textContent).toEqual('favorite_border');
  });

  it('should have favorite md-icon', () => {
    component.character.favorite = true;
    fixture.detectChanges();

    expect(fixture.debugElement.query(By.css('button md-icon')).nativeElement.textContent).toEqual('favorite');
  });

  it('should have scope initialized', () => {
    expect(component.character).toEqual(mockCharacter);
  });

  it('checks toggleFavorite method', () => {
    let canFavorite = spyOn(favoriteCounter, 'canFavorite').and.returnValue(true);
    let onFavorite = spyOn(favoriteCounter, 'onFavorite');
    let favState = component.character.favorite;

    component.toggleFavorite();

    expect(canFavorite).toHaveBeenCalled();
    expect(component.character.favorite).not.toEqual(favState);
    expect(onFavorite).toHaveBeenCalledWith(component.character);
  });
});
