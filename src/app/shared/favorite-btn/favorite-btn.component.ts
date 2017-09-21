import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {MarvelCharacter} from '../marvel-character/marvel-character';

@Component({
  selector: 'pt-favorite-btn',
  templateUrl: './favorite-btn.component.html',
  styleUrls: ['./favorite-btn.component.scss']
})
export class FavoriteBtnComponent implements OnInit {

  @Input() character: MarvelCharacter;
  @Input() current: number;
  @Input() max: number;
  @Output() onChange = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit() {
  }

  toggleFavorite(char: MarvelCharacter): void {
    if(!char.favorite && this.current === this.max) {
      return;
    }
    char.favorite = !char.favorite;
    return this.onChange.emit(char.favorite);
  }

}
