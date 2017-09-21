import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import {
  MdListModule, MdButtonModule, MdToolbarModule, MdProgressSpinnerModule,
  MdPaginatorModule, MdDialogModule, MdIconModule
} from '@angular/material';
import {FlexLayoutModule} from '@angular/flex-layout';

import {CoreRoutingModule} from './core-routing.module';
import {SharedModule} from '../shared/shared.module';

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
    SharedModule,
    MdListModule, MdIconModule, MdButtonModule, MdToolbarModule, MdProgressSpinnerModule, MdPaginatorModule, MdDialogModule,
    FlexLayoutModule
  ],
  exports: [
    HomeComponent,
    NavbarComponent
  ],
  entryComponents: [
    CharDetailComponent
  ]
})
export class CoreModule { }
