
import { NgModule } from '@angular/core';

import { TestComponent } from './teste.component';
import { TestRoutingModule } from './teste.routing-module';


@NgModule({
  declarations: [TestComponent],
  imports: [
    TestRoutingModule,
  ],
  providers: [],
})
export class TestModule { }