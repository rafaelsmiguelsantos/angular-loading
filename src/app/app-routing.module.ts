
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomPreloadingStrategy } from './custom-preloading-strategy/custom-preloading-strategy.services';


const routes: Routes = [
  { path: "test", loadChildren: () => import('./teste/teste.module').then(m => m.TestModule), data: { preload: true, delay: 5000 }  },
  { path: "conta", loadChildren: () => import('./conta/conta.module').then(m => m.ContaModule), data: { preload: true, delay: 7000 } },
];


@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: CustomPreloadingStrategy })],
  exports: [RouterModule]
})
export class AppRoutingModule { }