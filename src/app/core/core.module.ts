import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import {CharDetailComponent} from './char-detail/char-detail.component';
import {CharListComponent} from './char-list/char-list.component';
import {HomeComponent} from './home/home.component';
import {CoreRoutingModule} from './core-routing.module';

@NgModule({
  declarations: [
    HomeComponent,
    CharListComponent,
    CharDetailComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    CoreRoutingModule
  ]
})
export class CoreModule { }
