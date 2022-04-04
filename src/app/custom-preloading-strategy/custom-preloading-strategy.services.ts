import { Injectable } from '@angular/core';
import { Observable, of, timer } from 'rxjs';
import { map } from 'rxjs/operators'

import { PreloadingStrategy, Route } from '@angular/router';


@Injectable()
export class CustomPreloadingStrategy implements PreloadingStrategy {

  preload(route: Route, loadMe: () => Observable<any>): Observable<any> {

    if (route.data && route.data['preload']) {
      var delay: number = route.data['delay']
      console.log('pre carregamento acionado na rota ' + route.path + ' com um delay de ' + delay);
      return timer(delay).pipe(
        map(_ => {
          console.log("Carregando " + route.path + ' modulo');
          return loadMe();
        }));
    } else {
      console.log('Nenhum pré carregamento ' + route.path);
      return of(null);
    }
  }
}