import { NgModule } from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';
import {CharDetailComponent} from './char-detail/char-detail.component';
import {CharListComponent} from './char-list/char-list.component';
import {HomeComponent} from './home/home.component';

const appRoutes : Routes = [
  {path: 'home', component: HomeComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      {enableTracing: true}
    )
  ],
  exports: [
    RouterModule
  ]
})
export class CoreRoutingModule { }
