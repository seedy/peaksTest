import { Component, OnInit } from '@angular/core';
import {MdDialog} from '@angular/material';
import {Subject} from 'rxjs/Subject';
import {MarvelCharacterService} from '../../shared/marvel-character/marvel-character.service';
import {MarvelCharacter} from '../../shared/marvel-character/marvel-character';
import {CharDetailComponent} from '../char-detail/char-detail.component';
import {FavoriteCounterService} from '../favorite-counter/favorite-counter.service';

@Component({
  selector: 'pt-char-list',
  templateUrl: 'char-list.component.html',
  styleUrls: ['char-list.component.scss']
})
export class CharListComponent implements OnInit {

  characters = [];
  isLoading = false;
  pagination = {
    count: 0,
    limit: 20,
    index: 5,
    total: 0
  };

  favorites = 0;

  constructor(
    private marvelCharacterService: MarvelCharacterService,
    private dialog: MdDialog,
    private favoriteCounter: FavoriteCounterService
  ) { }

  ngOnInit() {
    this.loadCharacters(this.pagination.index, this.pagination.limit);
  }

  loadCharacters(index: number, number: number): void {
    this.isLoading = true;

    this.marvelCharacterService.getList(index * number, number)
      .subscribe((data) => {
        this.pagination = {
          count: data.count,
          limit: data.limit,
          index: data.offset / data.limit,
          total: data.total
        };
        this.characters = data.results;
        this.isLoading = false;
      });
  }

  showDetail(char: MarvelCharacter): void {
    let dialogRef = this.dialog.open(CharDetailComponent, {
      data: char
    });
  }

  onFav(state: boolean): void {
    if(state){
      this.favorites++;
    } else {
      this.favorites--;
    }
  }



}
