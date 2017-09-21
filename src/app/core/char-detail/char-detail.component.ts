import {Component, OnInit, Inject} from '@angular/core';
import { MdDialogRef, MD_DIALOG_DATA } from '@angular/material';
import {MarvelCharacter} from '../../shared/marvel-character/marvel-character';

@Component({
  selector: 'pt-char-detail',
  templateUrl: 'char-detail.component.html',
  styleUrls: ['char-detail.component.scss']
})
export class CharDetailComponent implements OnInit {

  constructor(
    public dialogRef: MdDialogRef<CharDetailComponent>,
    @Inject(MD_DIALOG_DATA) public data: { character: MarvelCharacter }
  ) { }

  ngOnInit() {

  }


}
