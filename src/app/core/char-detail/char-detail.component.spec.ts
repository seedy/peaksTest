import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CharDetailComponent } from './char-detail.component';
import {FavoriteBtnComponent} from '../../shared/favorite-btn/favorite-btn.component';
import {MdDialogModule, MdButtonModule, MdListModule, MdDialogRef, MdDialog, MdIconModule} from '@angular/material';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';


describe('CharDetailComponent', () => {
  let component: CharDetailComponent;
  let dialog: MdDialog;
  let fixture: ComponentFixture<CharDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [

      ],
      imports: [

      ]

    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CharDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
});
