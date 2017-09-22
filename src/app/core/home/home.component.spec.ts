import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {By} from '@angular/platform-browser';
import {CoreModule} from '../core.module';
import { HomeComponent } from './home.component';
import {CharListComponent} from '../char-list/char-list.component';
import {CharDetailComponent} from '../char-detail/char-detail.component';
import {
  MdListModule, MdIconModule, MdButtonModule, MdToolbarModule, MdProgressSpinnerModule,
  MdPaginatorModule, MdDialogModule
} from '@angular/material';
import {SharedModule} from '../../shared/shared.module';
import {MarvelCharacterService} from '../../shared/marvel-character/marvel-character.service';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        HomeComponent,
        CharListComponent,
        CharDetailComponent
      ],
      imports: [
        SharedModule,
        MdListModule, MdIconModule, MdButtonModule, MdToolbarModule, MdProgressSpinnerModule,
        MdPaginatorModule, MdDialogModule
      ],
      providers: [
        MarvelCharacterService
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('should have a div tag with pt-char-list as direct child', async(() => {
    expect(fixture.debugElement.query(By.css('div'))).not.toBeNull();
    expect(fixture.debugElement.query(By.css('div > pt-char-list'))).not.toBeNull();
  }));

});
