import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule }    from '@angular/http';
import { FavoriteBtnComponent } from './favorite-btn/favorite-btn.component';
import {MdButtonModule, MdIconModule} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    HttpModule,
    MdIconModule, MdButtonModule
  ],
  declarations: [FavoriteBtnComponent],
  exports: [FavoriteBtnComponent]
})
export class SharedModule { }
