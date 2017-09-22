import {Component, OnInit, Input} from '@angular/core';
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

  toggleFavorite(): void {
    if(!this.favoriteCounter.canFavorite() && !this.character.favorite) {
      return;
    }
    this.character.favorite = !this.character.favorite;
    this.favoriteCounter.onFavorite(this.character);
  }

}
