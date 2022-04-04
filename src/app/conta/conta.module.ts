import { NgModule } from '@angular/core';
import { DashboardComponent } from './conta-dashboard.component';

import { ContaRoutingModule } from './conta.routing-module';


@NgModule({
  declarations: [DashboardComponent],
  imports: [
    ContaRoutingModule,
  ],
  providers: [],
})
export class ContaModule { }