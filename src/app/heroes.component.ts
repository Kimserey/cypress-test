import { Component } from '@angular/core';
import { HeroService } from './services/hero.service';
import { Observable } from 'rxjs';

@Component({
  template: `
    <h1>
      Welcome to {{title}}!
    </h1>
    <ul *ngIf="heroes$ | async as heroes">
      <li *ngFor="let hero of heroes">
        <a [routerLink]="['/heroes', hero.id]">{{ hero.name }}</a>
      </li>
    </ul>
  `,
  styles: []
})
export class HeroesComponent {
  title = 'Heroes page';

  heroes$: Observable<{ id: number, name: string }[]>;

  constructor(service: HeroService) {
    this.heroes$ = service.getHeroes();
  }
}
