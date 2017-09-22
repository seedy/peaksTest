import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarComponent } from './navbar.component';
import {MdToolbarModule, MdButtonModule} from '@angular/material';
import {By} from '@angular/platform-browser';

describe('NavbarComponent', () => {
  let component: NavbarComponent;
  let fixture: ComponentFixture<NavbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavbarComponent ],
      imports: [ MdToolbarModule, MdButtonModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('should have a md-toolbar tag with button as direct child', async(() => {
    expect(fixture.debugElement.query(By.css('md-toolbar'))).not.toBeNull();
    expect(fixture.debugElement.query(By.css('md-toolbar button'))).not.toBeNull();
    let el = fixture.debugElement.query(By.css('md-toolbar button')).nativeElement;
    expect(el.textContent).toEqual('Peaks Test');
  }));
});
