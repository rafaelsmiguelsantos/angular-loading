import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TestComponent } from '../teste/teste.component';


const routes: Routes = [
  { path: 'list', component: TestComponent },
  { path: '', redirectTo: 'list' },
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TestRoutingModule { }