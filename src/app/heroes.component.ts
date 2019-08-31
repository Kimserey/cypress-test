import { Component } from '@angular/core';

@Component({
  template: `
    <h1>
      Welcome to {{title}}!
    </h1>
    <div *ngFor="let hero of heroes">
      <a [routerLink]="['/heroes', hero.id]">{{ hero.name }}</a>
    </div>
  `,
  styles: []
})
export class HeroesComponent {
  title = 'Heroes page';

  heroes = [
    {
      id: 1,
      name: 'Superman'
    },
    {
      id: 2,
      name: 'Batman'
    }
  ];
}
