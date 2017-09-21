import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {MarvelCharacter} from '../marvel-character/marvel-character';
import {FavoriteCounterService} from '../../core/favorite-counter/favorite-counter.service';

@Component({
  selector: 'pt-favorite-btn',
  templateUrl: './favorite-btn.component.html',
  styleUrls: ['./favorite-btn.component.scss']
})
export class FavoriteBtnComponent implements OnInit {

  @Input() character: MarvelCharacter;

  constructor(
    private favoriteCounter: FavoriteCounterService
  ) { }

  ngOnInit() {
  }

  toggleFavorite(char: MarvelCharacter): void {
    if(!this.favoriteCounter.canFavorite() && !char.favorite) {
      return;
    }
    char.favorite = !char.favorite;
    this.favoriteCounter.onFavorite(char.favorite);
  }

}
