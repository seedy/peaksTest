import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule }    from '@angular/http';

import {MdButtonModule, MdIconModule} from '@angular/material';

import { FavoriteBtnComponent } from './favorite-btn/favorite-btn.component';
import { FavoriteCounterService } from '../core/favorite-counter/favorite-counter.service';


@NgModule({
  imports: [
    CommonModule,
    HttpModule,
    MdIconModule, MdButtonModule
  ],
  providers: [
    FavoriteCounterService
  ],
  declarations: [FavoriteBtnComponent],
  exports: [FavoriteBtnComponent]
})
export class SharedModule { }
