import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import {
  MdListModule, MdButtonModule, MdToolbarModule, MdProgressSpinnerModule,
  MdPaginatorModule
} from '@angular/material';
import {FlexLayoutModule} from '@angular/flex-layout';

import {CoreRoutingModule} from './core-routing.module';

import {CharDetailComponent} from './char-detail/char-detail.component';
import {CharListComponent} from './char-list/char-list.component';
import {HomeComponent} from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';

import {MarvelCharacterService} from '../shared/marvel-character/marvel-character.service';


@NgModule({
  declarations: [
    HomeComponent,
    CharListComponent,
    CharDetailComponent,
    NavbarComponent
  ],
  providers: [
    MarvelCharacterService
  ],
  imports: [
    CommonModule,
    BrowserModule,
    CoreRoutingModule,
    MdListModule, MdButtonModule, MdToolbarModule, MdProgressSpinnerModule, MdPaginatorModule,
    FlexLayoutModule
  ],
  exports: [
    HomeComponent,
    NavbarComponent
  ]
})
export class CoreModule { }
